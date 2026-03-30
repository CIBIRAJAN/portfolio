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
        this.renderLoading();
        
        try {
            // Wait max 3 seconds for Supabase
            const dbLoaded = await Promise.race([
                this.waitForSupabase(),
                new Promise(resolve => setTimeout(() => resolve(false), 3000))
            ]);
            
            if (dbLoaded !== false && this.supabase) {
                const { data: links, error } = await this.supabase
                    .from('footer_links')
                    .select('*')
                    .order('created_at', { ascending: true });

                if (!error && links && links.length > 0) {
                    this.render(links);
                    return;
                }
            }
            throw new Error('Using fallback');
        } catch (error) {
            console.warn('Footer using static fallback');
            this.render(this.getFallbackLinks());
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
    <!-- ========== LAUNCH SECTION (CTA) — Compact CloseFuture Style ========== -->
    <section class="section section-launch" id="contact">
        <div class="launch-container">
            <div class="launch-visual">
                <img src="${pathPrefix}assets/images/hero/launch-premium.webp" alt="Let's launch together" class="launch-img">
            </div>
            <div class="launch-content">
                <h2 class="launch-title">Let’s launch together!</h2>
                <a href="https://cal.com/cibirajan-v/30min" target="_blank" class="btn-book">Book a Call</a>
            </div>
        </div>
    </section>

    <footer class="footer-modern">
        <div class="footer-container">
            <!-- Top Tier -->
            <div class="footer-top-tier">
                <div class="footer-nav-links">
                    ${navHtml}
                </div>
                <div class="footer-social-circles">
                    ${socialHtml}
                </div>
            </div>

            <!-- Bottom Tier -->
            <div class="footer-bottom-tier">
                <div class="footer-brand-large">CIBIRAJAN</div>
                <div class="footer-copyright-meta">
                    2026 © Copyrights Cibirajan All rights reserved
                </div>
            </div>
        </div>
    </footer>
    
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
