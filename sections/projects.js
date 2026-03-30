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
        this.renderLoading();
        
        try {
            await this.waitForSupabase();
            
            const { data: projects, error } = await this.supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) throw error;
            this.allProjects = projects;
            this.render();
        } catch (error) {
            console.error('Failed to load projects from Supabase:', error);
            this.fallbackToLocal();
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
        this.innerHTML = `
            <section class="section section-projects" id="projects">
                <div class="section-header">
                    <span class="section-label">👉 Builder Mode</span>
                    <h2 class="section-title">What I've Built</h2>
                    <p class="section-subtitle">Loading projects...</p>
                </div>
            </section>
        `;
    }

    setFilter(category) {
        this.activeFilter = category;
        this.render();
    }

    render() {
        const pathPrefix = this.getPathPrefix();
        const projects = this.activeFilter === 'All' 
            ? this.allProjects 
            : this.allProjects.filter(p => p.tech.some(t => t.includes(this.activeFilter)) || p.category.includes(this.activeFilter));

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

        const projectCards = projects.map((project, index) => `
            <div class="project-card-sticky" style="--stack-index: ${index};">
                <a href="${pathPrefix}${project.link}" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="${project.image.startsWith('http') ? project.image : pathPrefix + project.image}" alt="${project.title}" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">${project.category}</div>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tech">
                                ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                            </div>
                            <div class="project-case-study-label">
                                ${project.case_study_label || 'PRODUCTION CASE STUDY'} 
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');

        this.innerHTML = `
            <section class="section section-projects" id="projects">
                <div class="section-header">
                    <span class="section-label">👉 Builder Mode</span>
                    <h2 class="section-title">What I've Built</h2>
                    <p class="section-subtitle">Real products. Real users. Real impact.</p>
                </div>

                ${filterNav}

                <div class="projects-stack-wrapper">
                    ${projectCards.length > 0 ? projectCards : '<p class="no-projects">No projects found for this category.</p>'}
                </div>
            </section>
        `;
    }
}
customElements.define('project-showcase', ProjectShowcase);
