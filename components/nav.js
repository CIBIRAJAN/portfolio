/**
 * @file nav.js
 * @description Global Navigation Web Component
 * @module components/nav
 * 
 * COMMANDS:
 * - render(): Renders the navigation bar and mobile menu overlay.
 * - initMobileMenu(): Sets up event listeners for the mobile menu toggle and links.
 * - toggleMenu(): Toggles the active state of the mobile menu.
 * - closeMenu(): Closes the mobile menu and resets body overflow.
 */

class GlobalNav extends HTMLElement {
    connectedCallback() {
        const pathPrefix = this.getPathPrefix();
        this.innerHTML = `
            <nav class="nav">
                <div class="nav-container">
                    <div class="nav-logo">CIBIRAJAN</div>
                    <div class="nav-menu">
                        <a href="${pathPrefix}index.html#hero" class="nav-btn-pill" data-page="home">HOME</a>
                        <a href="${pathPrefix}index.html#projects" class="nav-btn-pill" data-page="projects">PROJECTS</a>
                        <a href="${pathPrefix}pages/blog.html" class="nav-btn-pill" data-page="blog">BLOG</a>
                        <a href="${pathPrefix}pages/about-us.html" class="nav-btn-pill" data-page="about">ABOUT</a>
                    </div>
                </div>
            </nav>

            <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-menu-links">
                    <a href="${pathPrefix}index.html" class="mobile-link" data-page="home">HOME</a>
                    <a href="${pathPrefix}index.html#projects" class="mobile-link" data-page="projects">PROJECTS</a>
                    <a href="${pathPrefix}pages/blog.html" class="mobile-link" data-page="blog">BLOG</a>
                    <a href="${pathPrefix}pages/about-us.html" class="mobile-link" data-page="about">ABOUT</a>
                </div>
            </div>
        `;

        this.setActivePage();
        this.initMobileMenu();
    }

    setActivePage() {
        const path = window.location.pathname;
        let currentPage = 'home';
        
        if (path.includes('blog.html')) currentPage = 'blog';
        else if (path.includes('about-us.html')) currentPage = 'about';
        else if (path.includes('/projects/')) currentPage = 'projects';
        else if (path.includes('index.html') || path.endsWith('/')) currentPage = 'home';

        const links = this.querySelectorAll(`[data-page="${currentPage}"]`);
        links.forEach(link => link.classList.add('active'));
    }

    getPathPrefix() {
        const path = window.location.pathname;
        if (path.includes('/projects/') || path.includes('/pages/')) {
            return '../';
        }
        return '';
    }

    initMobileMenu() {
        const navContainer = this.querySelector('.nav-container');
        let navMenuBtn = this.querySelector('#navMenuBtn');
        let mobileMenu = this.querySelector('#mobileMenu');
        let mobileMenuOverlay = this.querySelector('#mobileMenuOverlay');

        if (!navMenuBtn && navContainer) {
            navMenuBtn = document.createElement('button');
            navMenuBtn.id = 'navMenuBtn';
            navMenuBtn.className = 'hamburger-btn';
            navMenuBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
            navMenuBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
            navContainer.appendChild(navMenuBtn);
        }

        if (navMenuBtn && mobileMenu && mobileMenuOverlay) {
            const toggleMenu = (e) => {
                if(e) e.stopPropagation();
                const isActive = mobileMenu.classList.toggle('active');
                mobileMenuOverlay.classList.toggle('active');
                document.body.style.overflow = isActive ? 'hidden' : '';
            };

            const closeMenu = () => {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            };

            navMenuBtn.onclick = toggleMenu;
            mobileMenuOverlay.onclick = closeMenu;

            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.onclick = closeMenu;
            });
        }
    }
}

customElements.define('global-nav', GlobalNav);
