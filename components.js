class GlobalNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav">
                <div class="nav-container">
                    <div class="nav-logo">CIBIRAJAN</div>
                    <div class="nav-menu">
                        <a href="index.html#hero" class="nav-btn-pill">HOME</a>
                        <a href="index.html#projects" class="nav-btn-pill">PROJECTS</a>
                        <a href="blog.html" class="nav-btn-pill">BLOG</a>
                        <a href="about-us.html" class="nav-btn-pill">ABOUT</a>
                    </div>
                </div>
            </nav>

            <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-menu-links">
                    <a href="index.html" class="mobile-link">HOME</a>
                    <a href="index.html#projects" class="mobile-link">PROJECTS</a>
                    <a href="blog.html" class="mobile-link">BLOG</a>
                    <a href="about-us.html" class="mobile-link">ABOUT</a>
                </div>
            </div>
        `;

        // Boot mobile button and events
        if (typeof initMobileMenu === 'function') {
            initMobileMenu();
        }
    }
}

customElements.define('global-nav', GlobalNav);

class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <!-- ========== LAUNCH SECTION (CTA) — Compact CloseFuture Style ========== -->
    <section class="section section-launch" id="contact">
        <div class="launch-container">
            <div class="launch-visual">
                <img src="assets/images/launch-premium.webp" alt="Let's launch together" class="launch-img">
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
                    <a href="index.html#hero">HOME</a>
                    <a href="index.html#projects">PROJECTS</a>
                    <a href="index.html#workethic">JOURNEY</a>
                    <a href="about-us.html">IDENTITY</a>
                    <a href="https://cal.com/cibirajan-v/30min">CONTACT</a>
                </div>
                <div class="footer-social-circles">
                    <a href="mailto:vcibirajan@gmail.com" class="social-circle" title="Email">📧</a>
                    <a href="https://twitter.com/_cibirajan" target="_blank" class="social-circle" title="Twitter">𝕏</a>
                    <a href="https://linkedin.com/in/cibirajan-visvanathan-14b35224a/" target="_blank" class="social-circle" title="LinkedIn">in</a>
                    <a href="https://github.com/CIBIRAJAN" target="_blank" class="social-circle" title="GitHub">🐙</a>
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
}

customElements.define('global-footer', GlobalFooter);
