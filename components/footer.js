/**
 * @file footer.js
 * @description Global Footer Web Component
 * @module components/footer
 * 
 * COMMANDS:
 * - render(): Renders the launch (CTA) section and the main footer.
 * - initScrollToTop(): Sets up display and behavior for the "scroll to top" button.
 */

class GlobalFooter extends HTMLElement {
    constructor() {
        super();
        this.supabase = null;
    }

    async connectedCallback() {
        const fallbacks = this.getFallbackLinks();
        this.render(fallbacks);
        
        try {
            // Wait max 2 seconds for Supabase in background
            const dbLoaded = await Promise.race([
                this.waitForSupabase(),
                new Promise(resolve => setTimeout(() => resolve(false), 2000))
            ]);
            
            if (dbLoaded !== false && this.supabase) {
                const { data: links, error } = await this.supabase
                    .from('footer_links')
                    .select('*')
                    .order('created_at', { ascending: true });

                if (!error && links && links.length > 0) {
                    const navLinks = links.filter(l => l.type === 'nav');
                    const finalLinks = [...links];
                    
                    if (navLinks.length === 0) {
                        finalLinks.unshift(
                            { title: 'HOME', url: 'index.html#hero', type: 'nav' },
                            { title: 'PROJECTS', url: 'index.html#projects', type: 'nav' },
                            { title: 'JOURNEY', url: 'index.html#workethic', type: 'nav' },
                            { title: 'IDENTITY', url: 'pages/about-us.html', type: 'nav' }
                        );
                    }
                    
                    // Check if social links actually changed before re-rendering
                    const currentSocial = fallbacks.filter(l => l.type === 'social');
                    const newSocial = finalLinks.filter(l => l.type === 'social');
                    
                    const changed = currentSocial.length !== newSocial.length || 
                        newSocial.some((link, i) => link.url !== currentSocial[i].url || 
                                                 link.title !== currentSocial[i].title || 
                                                 link.icon !== currentSocial[i].icon);
                    
                    if (changed) {
                        this.render(finalLinks);
                    }
                }
            }
        } catch (error) {
            console.warn('Footer background load failed:', error);
        }
    }

    getFallbackLinks() {
        return [
            { title: 'HOME', url: 'index.html#hero', type: 'nav' },
            { title: 'PROJECTS', url: 'index.html#projects', type: 'nav' },
            { title: 'JOURNEY', url: 'index.html#workethic', type: 'nav' },
            { title: 'IDENTITY', url: 'pages/about-us.html', type: 'nav' },
            { title: 'GitHub', url: 'https://github.com/CIBIRAJAN', icon: '🐙', type: 'social' },
            { title: 'LinkedIn', url: 'https://linkedin.com/in/cibirajan-visvanathan-14b35224a/', icon: 'in', type: 'social' },
            { title: 'Twitter', url: 'https://twitter.com/_cibirajan', icon: '𝕏', type: 'social' },
            { title: 'Email', url: 'mailto:vcibirajan@gmail.com', icon: '📧', type: 'social' }
        ];
    }

    async waitForSupabase() {
        return new Promise((resolve) => {
            const check = () => {
                if (window.supabase) {
                    this.supabase = window.supabase.createClient(
                        'https://kfcqfaqkxbsvjatzjxfd.supabase.co',
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmY3FmYXFreGJzdmphdHpqeGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NDg4ODksImV4cCI6MjA4OTMyNDg4OX0.ReAzLZ_uxSeXoNIIA0oTSnjdvNjP48HxpMA_X6BpXbs'
                    );
                    resolve(true);
                } else {
                    setTimeout(check, 50);
                }
            };
            check();
        });
    }

    renderLoading() {
        const pathPrefix = this.getPathPrefix();
        this.innerHTML = `
            <footer class="footer-modern">
                <div class="footer-container">
                    <p style="text-align: center; opacity: 0.5;">Loading footer...</p>
                </div>
            </footer>
        `;
    }

    render(links) {
        const pathPrefix = this.getPathPrefix();
        const navLinks = links.filter(l => l.type === 'nav');
        const socialLinks = links.filter(l => l.type === 'social');

        const navHtml = navLinks.map(link => `
            <a href="${link.url.startsWith('http') ? link.url : pathPrefix + link.url}">${link.title}</a>
        `).join('');

        const socialHtml = socialLinks.map(link => {
            const isEmoji = !link.icon || link.icon.length <= 2;
            const iconHtml = isEmoji 
                ? link.icon || '' 
                : `<img src="${link.icon.startsWith('http') ? link.icon : pathPrefix + link.icon}" alt="${link.title}" style="width: 20px; height: 20px;">`;
            
            return `
                <a href="${link.url}" class="social-circle" title="${link.title}" target="_blank">
                    ${iconHtml}
                </a>
            `;
        }).join('');

        this.innerHTML = `
    <div class="footer-wrap-container">
        <!-- ========== LAUNCH SECTION (CTA) ========== -->
        <section class="section section-launch" id="contact">
            <div class="launch-card-container">
                <div class="launch-content">
                    <span class="section-label" style="margin-bottom: 20px;">👉 Let's connect</span>
                    <h2 class="launch-title">Let's launch together!</h2>
                    <p class="launch-subtitle">Have an idea or a challenge? Let's connect and build something impactful.</p>
                    <a href="https://cal.com/cibirajan-v/30min" target="_blank" class="btn-book">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        Book a Call
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
                <div class="launch-visual">
                    <img src="${pathPrefix}assets/images/hero/launch-premium.webp" alt="Let's launch together" class="launch-img">
                </div>
            </div>
        </section>

        <!-- ========== GLOBAL FOOTER ========== -->
        <footer class="footer-modern-light">
            <div class="footer-container">
                <!-- Left: Brand -->
                <div class="footer-brand-col">
                    <div class="footer-brand-large">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        <span>Cibirajan</span>
                    </div>
                    <p class="footer-tagline">Crafting digital experiences through elegant code and thoughtful design.</p>
                </div>

                <!-- Center: Nav Grid -->
                <div class="footer-nav-grid">
                    <a href="${pathPrefix}index.html#hero" class="nav-grid-item">
                        <div class="nav-icon">🏠</div>
                        <div class="nav-text">
                            <span class="nav-title">Home</span>
                            <span class="nav-sub">Back to overview</span>
                        </div>
                    </a>
                    <a href="${pathPrefix}index.html#projects" class="nav-grid-item">
                        <div class="nav-icon">📁</div>
                        <div class="nav-text">
                            <span class="nav-title">Projects</span>
                            <span class="nav-sub">Explore my work</span>
                        </div>
                    </a>
                    <a href="${pathPrefix}index.html#workethic" class="nav-grid-item">
                        <div class="nav-icon">📊</div>
                        <div class="nav-text">
                            <span class="nav-title">Journey</span>
                            <span class="nav-sub">See my process</span>
                        </div>
                    </a>
                    <a href="${pathPrefix}pages/about-us.html" class="nav-grid-item">
                        <div class="nav-icon">👤</div>
                        <div class="nav-text">
                            <span class="nav-title">Identity</span>
                            <span class="nav-sub">Know more about me</span>
                        </div>
                    </a>
                </div>

                <!-- Right: Socials -->
                <div class="footer-social-col">
                    <div class="footer-social-circles">
                        ${socialHtml}
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom-line">
                <div class="footer-copyright-meta">
                    © 2026 Cibirajan. All rights reserved.
                </div>
            </div>
        </footer>
    </div>
    
    <!-- Scroll To Top Button -->
    <button class="scroll-top-btn" id="scrollTopBtn" aria-label="Scroll to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
            <polyline points="18 9 12 3 6 9"></polyline>
        </svg>
    </button>
        `;

        this.initButtons();
    }

    initButtons() {
        const scrollTopBtn = this.querySelector('#scrollTopBtn');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    getPathPrefix() {
        const path = window.location.pathname;
        if (path.toLowerCase().includes('/projects/') || path.toLowerCase().includes('/pages/')) {
            return '../';
        }
        return '';
    }
}

customElements.define('global-footer', GlobalFooter);
