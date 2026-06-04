/**
 * @file projects.js
 * @description Dynamic Project Showcase Web Component
 * @module sections/projects
 * 
 * COMMANDS:
 * - connectedCallback(): Initiates the fetching of project data and renders the section.
 * - fetchProjects(): Loads project details from data/projects.json.
 * - render(projects): Maps project data into HTML card structures with staggered animation logic.
 */

class ProjectShowcase extends HTMLElement {
    constructor() {
        super();
        this.supabase = null;
        this.allProjects = [];
        this.activeFilter = 'All';
    }

    async connectedCallback() {
        // 1. Try to load from localStorage cache first (fastest)
        let cached = null;
        try {
            cached = localStorage.getItem('portfolio_projects');
            if (cached) {
                this.allProjects = JSON.parse(cached);
                this.render();
            }
        } catch (e) {}

        // 2. If not cached, render skeleton loaders and load from local static JSON immediately
        if (!this.allProjects || this.allProjects.length === 0) {
            this.renderSkeleton();
            await this.fallbackToLocal();
        }

        // 3. Query Supabase in the background
        try {
            await this.waitForSupabase();
            
            const { data: projects, error } = await this.supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) throw error;

            if (projects && projects.length > 0) {
                const dataChanged = JSON.stringify(this.allProjects) !== JSON.stringify(projects);
                this.allProjects = projects;
                try {
                    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
                } catch (e) {}
                
                if (dataChanged) {
                    this.render();
                }
            }
        } catch (error) {
            console.error('Failed to load projects from Supabase in background:', error);
            // Fallback to local if we still have no data loaded
            if (!this.allProjects || this.allProjects.length === 0) {
                await this.fallbackToLocal();
            }
        }
    }

    async waitForSupabase() {
        return new Promise((resolve) => {
            const check = () => {
                if (window.supabase) {
                    this.supabase = window.supabase.createClient(
                        'https://kfcqfaqkxbsvjatzjxfd.supabase.co',
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmY3FmYXFreGJzdmphdHpqeGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NDg4ODksImV4cCI6MjA4OTMyNDg4OX0.ReAzLZ_uxSeXoNIIA0oTSnjdvNjP48HxpMA_X6BpXbs'
                    );
                    resolve();
                } else {
                    setTimeout(check, 50);
                }
            };
            check();
        });
    }

    async fallbackToLocal() {
        const pathPrefix = this.getPathPrefix();
        try {
            const response = await fetch(`${pathPrefix}data/projects.json`);
            this.allProjects = await response.json();
            this.render();
        } catch (e) {
            this.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--text-muted);">Error loading projects. Please check console for details.</p>`;
        }
    }

    getPathPrefix() {
        const path = window.location.pathname;
        if (path.toLowerCase().includes('/projects/') || path.toLowerCase().includes('/pages/')) {
            return '../';
        }
        return '';
    }

    renderLoading() {
        // Kept for backward compatibility
    }

    renderSkeleton() {
        const filters = ['All', 'Flutter', 'Supabase', 'Python', 'Stripe'];
        const filterNav = `
            <div class="project-filters">
                ${filters.map(f => `
                    <button class="filter-btn ${this.activeFilter === f ? 'active' : ''}">
                        ${f}
                    </button>
                `).join('')}
            </div>
        `;
        
        const skeletonCards = Array(3).fill(0).map((_, idx) => `
            <glass-surface class="slider-card skeleton-card ${idx === 0 ? 'card-active' : (idx === 1 ? 'card-right' : 'card-hidden-right')}" border-radius="40" background-opacity="0.05" saturation="1.4">
                <div class="slider-card-image-wrap" style="width: 100%; height: 270px; background: var(--accent-light); border-bottom: 1px solid var(--glass-border); overflow: hidden;">
                    <div class="skeleton-image-placeholder" style="width: 100%; height: 100%;"></div>
                </div>
                <div class="slider-card-info" style="padding: 24px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; flex: 1; width: 100%; text-align: left;">
                    <div>
                        <div class="skeleton-line skeleton-category" style="margin-bottom: 8px;"></div>
                        <div class="skeleton-line skeleton-title" style="width: 80%; margin-bottom: 12px;"></div>
                        <div class="skeleton-line skeleton-desc" style="margin-bottom: 8px;"></div>
                        <div class="skeleton-line skeleton-desc-short" style="margin-bottom: 16px;"></div>
                    </div>
                    <div class="project-tech" style="display: flex; gap: 8px;">
                        <span class="skeleton-badge"></span>
                        <span class="skeleton-badge"></span>
                    </div>
                </div>
            </glass-surface>
        `).join('');

        this.innerHTML = `
            <section class="section section-projects" id="projects">
                <div class="section-header">
                    <span class="section-label">👉 Builder Mode</span>
                    <h2 class="section-title">What I've Built</h2>
                    <p class="section-subtitle">Real products. Real users. Real impact.</p>
                </div>

                ${filterNav}

                <div class="projects-slider-container fade-in-up">
                    <div class="slider-track-viewport">
                        <div class="slider-track">
                            ${skeletonCards}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    setFilter(category) {
        this.activeFilter = category;
        this.currentIndex = 0;
        this.render();
    }

    initSlider() {
        const cards = this.querySelectorAll('.slider-card');
        this.cardElements = Array.from(cards);
        
        this.currentIndex = 0;
        this.updateSliderStates();
        
        // Add click listener to each card
        this.cardElements.forEach((card, index) => {
            card.addEventListener('click', (e) => {
                const relativeIndex = index - this.currentIndex;
                if (relativeIndex === -1) {
                    e.preventDefault();
                    this.prevCard();
                } else if (relativeIndex === 1) {
                    e.preventDefault();
                    this.nextCard();
                } else if (relativeIndex === 0) {
                    // On active card click, if they didn't click the link text directly,
                    // we can trigger link navigation.
                    if (!e.target.closest('a')) {
                        const link = card.getAttribute('data-link');
                        if (link) window.location.href = link;
                    }
                }
            });
        });
        
        // Add click listeners to arrows
        const arrowLeft = this.querySelector('.arrow-left');
        const arrowRight = this.querySelector('.arrow-right');
        
        if (arrowLeft) {
            arrowLeft.onclick = (e) => {
                e.stopPropagation();
                this.prevCard();
            };
        }
        if (arrowRight) {
            arrowRight.onclick = (e) => {
                e.stopPropagation();
                this.nextCard();
            };
        }
        
        this.setupSwipeEvents();
    }

    nextCard() {
        const N = this.cardElements.length;
        if (N === 0) return;
        this.currentIndex = (this.currentIndex + 1) % N;
        this.updateSliderStates();
    }

    prevCard() {
        const N = this.cardElements.length;
        if (N === 0) return;
        this.currentIndex = (this.currentIndex - 1 + N) % N;
        this.updateSliderStates();
    }

    updateSliderStates() {
        const N = this.cardElements.length;
        this.cardElements.forEach((card, index) => {
            card.className = 'slider-card';
            
            let relativeIndex = index - this.currentIndex;
            
            // Loop adjustment math for circular offsets on N elements (N >= 3)
            if (N > 2) {
                if (relativeIndex > N / 2) {
                    relativeIndex -= N;
                } else if (relativeIndex < -N / 2) {
                    relativeIndex += N;
                }
            }
            
            if (relativeIndex === 0) {
                card.classList.add('card-active');
            } else if (relativeIndex === -1) {
                card.classList.add('card-left');
            } else if (relativeIndex === 1) {
                card.classList.add('card-right');
            } else if (relativeIndex < -1) {
                card.classList.add('card-hidden-left');
            } else if (relativeIndex > 1) {
                card.classList.add('card-hidden-right');
            }
        });
        
        // Loopable carousel: arrows are ALWAYS enabled unless category has <= 1 project
        const arrowLeft = this.querySelector('.arrow-left');
        const arrowRight = this.querySelector('.arrow-right');
        
        if (arrowLeft) {
            if (this.originalProjectsLength <= 1) {
                arrowLeft.style.opacity = '0.25';
                arrowLeft.style.pointerEvents = 'none';
            } else {
                arrowLeft.style.opacity = '1';
                arrowLeft.style.pointerEvents = 'auto';
            }
        }
        
        if (arrowRight) {
            if (this.originalProjectsLength <= 1) {
                arrowRight.style.opacity = '0.25';
                arrowRight.style.pointerEvents = 'none';
            } else {
                arrowRight.style.opacity = '1';
                arrowRight.style.pointerEvents = 'auto';
            }
        }
        
        // Update dots
        const dots = this.querySelectorAll('.slider-dot');
        if (dots.length > 0) {
            const logicalIndex = this.currentIndex % this.originalProjectsLength;
            dots.forEach((dot, index) => {
                if (index === logicalIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    }

    setupSwipeEvents() {
        const track = this.querySelector('.slider-track-viewport');
        if (!track || this.originalProjectsLength <= 1) return;
        
        let startX = 0;
        let isDragging = false;
        
        const onStart = (e) => {
            isDragging = true;
            startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        };
        
        const onEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
            const deltaX = endX - startX;
            
            const threshold = 60;
            if (deltaX < -threshold) {
                this.nextCard();
            } else if (deltaX > threshold) {
                this.prevCard();
            }
        };
        
        track.addEventListener('mousedown', onStart);
        track.addEventListener('mouseup', onEnd);
        track.addEventListener('touchstart', onStart, { passive: true });
        track.addEventListener('touchend', onEnd, { passive: true });
    }

    render() {
        const pathPrefix = this.getPathPrefix();
        const projects = this.activeFilter === 'All' 
            ? this.allProjects 
            : this.allProjects.filter(p => p.tech.some(t => t.includes(this.activeFilter)) || p.category.includes(this.activeFilter));

        this.originalProjectsLength = projects.length;

        // Clone/duplicate project cards if count is small (N=2 or N=3) to provide a hidden buffer
        // for smooth circular coverflow loops without visual crossover jumps.
        let displayProjects = [...projects];
        if (projects.length > 1 && projects.length < 4) {
            while (displayProjects.length < 6) {
                displayProjects = [...displayProjects, ...projects];
            }
        }

        const filters = ['All', 'Flutter', 'Supabase', 'Python', 'Stripe'];
        const filterNav = `
            <div class="project-filters">
                ${filters.map(f => `
                    <button class="filter-btn ${this.activeFilter === f ? 'active' : ''}" 
                            onclick="document.querySelector('project-showcase').setFilter('${f}')">
                        ${f}
                    </button>
                `).join('')}
            </div>
        `;

        const projectCards = displayProjects.map((project, index) => `
            <div class="slider-card" data-index="${index}" data-link="${pathPrefix}${project.link}">
                <div class="slider-card-content">
                    <div class="slider-card-image-wrap">
                        <img src="${project.image.startsWith('http') ? project.image : pathPrefix + project.image}" alt="${project.title}" class="slider-card-img" draggable="false">
                    </div>
                    <div class="slider-card-info">
                        <div>
                            <div class="project-category">${project.category}</div>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                        </div>
                        <div>
                            <div class="project-tech">
                                ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                            </div>
                            <a href="${pathPrefix}${project.link}" class="project-case-study-link">
                                View Case Study
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        const dotIndicators = Array(this.originalProjectsLength).fill(0).map((_, idx) => `
            <div class="slider-dot" data-idx="${idx}" onclick="document.querySelector('project-showcase').setIndex(${idx})"></div>
        `).join('');

        this.innerHTML = `
            <section class="section section-projects" id="projects">
                <div class="section-header">
                    <span class="section-label">👉 Builder Mode</span>
                    <h2 class="section-title">What I've Built</h2>
                    <p class="section-subtitle">Real products. Real users. Real impact. Swipe or click to browse.</p>
                </div>

                ${filterNav}

                <div class="projects-slider-container fade-in-up">
                    <button class="slider-arrow arrow-left" aria-label="Previous Project">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    
                    <div class="slider-track-viewport">
                        <div class="slider-track">
                            ${projectCards.length > 0 ? projectCards : '<div class="slider-card no-projects" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;"><h3>No projects found.</h3></div>'}
                        </div>
                    </div>
                    
                    <button class="slider-arrow arrow-right" aria-label="Next Project">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
                
                ${projectCards.length > 1 ? `<div class="slider-dots">${dotIndicators}</div>` : ''}
            </section>
        `;

        if (displayProjects.length > 0) {
            this.initSlider();
        }
    }

    setIndex(idx) {
        if (this.cardElements && this.cardElements.length > 0) {
            this.currentIndex = idx;
            this.updateSliderStates();
        }
    }
}
customElements.define('project-showcase', ProjectShowcase);
