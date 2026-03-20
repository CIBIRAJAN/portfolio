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

        this.initMobileMenu();
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

class HomeHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="hero" id="hero">
        <div id="hero-cloud" class="hero-cloud-bg"></div>

        <div class="hero-main-cta">
            <h1 class="hero-main-headline">
                <span class="hero-headline-top">Building App That</span>
                <span class="hero-headline-accent">Scale to High</span>
            </h1>
            <a href="#projects" class="hero-works-btn">Works</a>
        </div>

        <div class="hero-visual-container">
            <div class="mobile-hero-visual">
                <a href="about-us.html" class="mobile-hero-link">
                    <img src="assets/center.webp" alt="Cibirajan" class="mobile-hero-img persona-img" draggable="false">
                </a>
            </div>

            <div class="persona-showcase">
                <div class="persona-zone persona-side persona-builder" data-target="workethic" data-persona="builder">
                    <div class="persona-image-wrap">
                        <img src="assets/left.webp" alt="Builder Persona" class="persona-img">
                    </div>
                </div>

                <div class="persona-zone persona-center persona-identity" data-target="journey" data-persona="identity">
                    <div class="persona-image-wrap">
                        <img src="assets/center.webp" alt="Identity Persona" class="persona-img" draggable="false">
                    </div>
                </div>

                <div class="persona-zone persona-side persona-thinker" data-target="projects" data-persona="thinker">
                    <div class="persona-image-wrap">
                        <img src="assets/right.webp" alt="Thinker Persona" class="persona-img">
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-overlays">
            <div class="persona-overlay" id="overlay-builder">
                <div class="persona-label-tag">LOGIC & ARCHITECTURE</div>
                <h3 class="persona-title">HOW I WORK</h3>
            </div>
            <div class="persona-overlay" id="overlay-identity">
                <div class="persona-label-tag">THE PERSON BEHIND THE CODE</div>
                <h3 class="persona-title">IDENTITY</h3>
            </div>
            <div class="persona-overlay" id="overlay-thinker">
                <div class="persona-label-tag">PRODUCTION SYSTEMS</div>
                <h3 class="persona-title">WHAT I'VE BUILT</h3>
            </div>
        </div>
    </section>
        `;

        this.initInteractions();
        this.initCloud();
    }

    initInteractions() {
        const zones = this.querySelectorAll('.persona-zone');
        const overlays = this.querySelectorAll('.persona-overlay');

        zones.forEach(zone => {
            zone.addEventListener('click', () => {
                const persona = zone.getAttribute('data-persona');
                if (persona === 'identity') {
                    window.location.href = 'about-us.html';
                    return;
                }
                
                const target = zone.getAttribute('data-target');
                const targetSection = document.getElementById(target);
                if (targetSection) {
                    const offset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth'
                    });
                }
            });

            zone.addEventListener('mouseenter', () => {
                const persona = zone.getAttribute('data-persona');
                const targetOverlay = this.querySelector(`#overlay-${persona}`);
                if (targetOverlay) {
                    targetOverlay.classList.add('active');
                }
            });

            zone.addEventListener('mouseleave', () => {
                overlays.forEach(o => o.classList.remove('active'));
            });
        });
    }

    initCloud() {
        const container = this.querySelector('#hero-cloud');
        if (!container || typeof TagCloud === 'undefined') {
            // Wait for library if not present yet
            if (typeof TagCloud === 'undefined') {
                setTimeout(() => this.initCloud(), 200);
            }
            return;
        }

        const iconData = [
            { slug: 'javascript' }, { slug: 'typescript' }, { slug: 'html5' }, { slug: 'sass' },
            { slug: 'react' }, { slug: 'nextdotjs' }, { slug: 'vuedotjs' }, { slug: 'tailwindcss' }, { slug: 'framer' },
            // ... (rest truncated for replacement chunk brevity, I'll include all original logic now for completeness)
            { slug: 'radixui' }, { slug: 'shadcnui' }, { slug: 'flutter' }, { slug: 'dart' }, { slug: 'android' }, { slug: 'apple' }, { slug: 'pwa' },
            { slug: 'nodedotjs' }, { slug: 'express' }, { slug: 'python' }, { slug: 'fastapi' }, { slug: 'go' },
            { slug: 'postgresql' }, { slug: 'supabase' }, { slug: 'firebase' }, { slug: 'mongodb' }, { slug: 'redis' }, { slug: 'prisma' },
            { slug: 'docker' }, { slug: 'kubernetes' }, { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' },
            { slug: 'github' }, { slug: 'git' }, { slug: 'bitbucket' }, { slug: 'postman' }, { slug: 'insomnia' },
            { slug: 'figma' }, { slug: 'framer' }, { slug: 'anthropic' }, { slug: 'langchain' }, { slug: 'pytorch' },
            { slug: 'react' }, { slug: 'nextdotjs' }, { slug: 'flutter' }, { slug: 'supabase' }, { slug: 'tailwindcss' },
            { slug: 'nodedotjs' }, { slug: 'postgresql' }, { slug: 'javascript' }, { slug: 'typescript' }, { slug: 'github' },
            { slug: 'docker' }, { slug: 'aws' }, { slug: 'react' }, { slug: 'nodedotjs' }, { slug: 'flutter' },
            { slug: 'supabase' }, { slug: 'stripe' }, { slug: 'figma' }, { slug: 'javascript' }, { slug: 'html5' },
            { slug: 'python' }, { slug: 'docker' }, { slug: 'github' }, { slug: 'git' }, { slug: 'postgresql' }, { slug: 'mongodb' }, { slug: 'express' },
            { slug: 'typescript' }, { slug: 'android' }, { slug: 'nextdotjs' }, { slug: 'tailwindcss' }, { slug: 'firebase' }, { slug: 'graphql' },
            { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' }, { slug: 'postman' }, { slug: 'radixui' }, { slug: 'framer' }
        ];

        let texts = iconData.map(d => d.slug);
        
        if (window.innerWidth < 768) {
            texts = texts.slice(0, 20);
        } else if (window.innerWidth < 1024) {
            texts = texts.slice(0, 45);
        }

        const options = {
            radius: window.innerWidth < 768 ? 350 : (window.innerWidth < 1024 ? 550 : 1100),
            maxSpeed: 'slow',
            initSpeed: 'slow',
            direction: 135,
            keep: true,
            useContainerInlineStyles: true,
            containerClass: 'tagcloud',
            itemClass: 'tagcloud--item-icon',
        };

        const tc = TagCloud(container, texts, options);

        const injectLogos = () => {
            const items = container.querySelectorAll('.tagcloud--item-icon');
            items.forEach((item) => {
                const slug = item.textContent.toLowerCase().trim();
                if (slug) {
                    item.innerHTML = `<img src="https://cdn.simpleicons.org/${slug}/222222" 
                                           width="45" height="45" 
                                           style="display:block; opacity: 0.35;"
                                           onerror="this.style.display='none'; this.parentElement.innerHTML='${slug.toUpperCase()}'" />`;
                }
            });
        };

        setTimeout(injectLogos, 300);
        setTimeout(injectLogos, 1000);
    }
}
customElements.define('home-hero', HomeHero);

class ProjectShowcase extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="section section-projects" id="projects">
        <div class="section-header">
            <span class="section-label">👉 Builder Mode</span>
            <h2 class="section-title">What I've Built</h2>
            <p class="section-subtitle">Real products. Real users. Real impact.</p>
        </div>

        <div class="projects-stack-wrapper">
            <div class="project-card-sticky" style="--stack-index: 0;">
                <a href="project-fintech.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/agentgo-project.png" alt="FinTech" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">FinTech Ecosystem</div>
                            <h3 class="project-title">Financial Management Ecosystem</h3>
                            <p class="project-description">A high-performance system for tracking income, shared wallets, and custom analytics with gamified rewards.</p>
                            <div class="project-tech">
                                <span class="tech-badge">Flutter</span>
                                <span class="tech-badge">Supabase</span>
                                <span class="tech-badge">Stripe</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 1;">
                <a href="project-workspace.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/webiz-project.png" alt="Workspace Booking" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">Enterprise SaaS</div>
                            <h3 class="project-title">WorkSpace Booking Suite</h3>
                            <p class="project-description">A modern digital initiative for high-performance booking, scalable backend systems, and intuitive coworking UX.</p>
                            <div class="project-tech">
                                <span class="tech-badge">FlutterFlow</span>
                                <span class="tech-badge">Node.js</span>
                                <span class="tech-badge">IoT</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 2;">
                <a href="project-agentgo.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/agentgo-project.png" alt="AgentGo CRM" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">Sales & CRM</div>
                            <h3 class="project-title">AgentGo — Insurance CRM</h3>
                            <p class="project-description">State-of-the-art CRM for insurance agents featuring full-cycle client management and automated commission tracking.</p>
                            <div class="project-tech">
                                <span class="tech-badge">Flutter</span>
                                <span class="tech-badge">Supabase</span>
                                <span class="tech-badge">Agent Networking</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 3;">
                <a href="project-internal-comm.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/admin-dashboard.png" alt="Communication Platform" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">Secure Comms</div>
                            <h3 class="project-title">Internal Communication Platform</h3>
                            <p class="project-description">A high-performance secure messaging platform for enterprise collaboration and real-time data sync.</p>
                            <div class="project-tech">
                                <span class="tech-badge">Real-time</span>
                                <span class="tech-badge">Node.js</span>
                                <span class="tech-badge">Enterprise Sync</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 4;">
                <a href="project-agri-ai.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/iot-dashboard-project.png" alt="AI Farming" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">AI & Machine Learning</div>
                            <h3 class="project-title">AI Agriculture System</h3>
                            <p class="project-description">Intelligent system for early detection of crop-related risks using data-driven insights and conference-grade AI models.</p>
                            <div class="project-tech">
                                <span class="tech-badge">Python</span>
                                <span class="tech-badge">ML Models</span>
                                <span class="tech-badge">Agritech</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 5;">
                <a href="project-transport.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/webiz-project.png" alt="Transportation" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">Accessibility Solutions</div>
                            <h3 class="project-title">No-App Transport Booking</h3>
                            <p class="project-description">An efficient method for booking transportation without a mobile app, focusing on high availability and low-latency interaction.</p>
                            <div class="project-tech">
                                <span class="tech-badge">Web-First</span>
                                <span class="tech-badge">Real-time Allocation</span>
                                <span class="tech-badge">UX Optimization</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 6;">
                <a href="project-cardio-ai.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/iot-dashboard-project.png" alt="Cardio AI" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">HealthTech AI</div>
                            <h3 class="project-title">Cardio Disease Forecasting</h3>
                            <p class="project-description">Advanced heart disease risk forecasting system using clinical machine learning markers to improve patient outcomes.</p>
                            <div class="project-tech">
                                <span class="tech-badge">ML Forecast</span>
                                <span class="tech-badge">Clinical Data</span>
                                <span class="tech-badge">Scikit-learn</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="project-card-sticky" style="--stack-index: 7;">
                <a href="project-sasa.html" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="assets/images/admin-dashboard.png" alt="SASA Academic" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">EdTech Platform</div>
                            <h3 class="project-title">SASA — Academic Platform</h3>
                            <p class="project-description">Seamless Academic & Skill Assessment Platform for integrated performance tracking and real-time student evaluation.</p>
                            <div class="project-tech">
                                <span class="tech-badge">Academic Tech</span>
                                <span class="tech-badge">Skill Mapping</span>
                                <span class="tech-badge">Data Analysis</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
        `;
    }
}
customElements.define('project-showcase', ProjectShowcase);

class CustomerReviews extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="section section-customers" id="customers">
        <div class="section-header text-center">
            <span class="section-label">🤝 Collaboration</span>
            <h2 class="section-title">Our Happy Customers</h2>
            <p class="section-subtitle">Real feedback from teams I've helped scale and succeed.</p>
        </div>

        <div class="marquee-ticker">
            <div class="ticker-track">
                <div class="customer-card tilt-left bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"Cibirajan's ability to translate complex logic into seamless UI is unmatched. He didn't just build the app; he refined our entire product strategy."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-1.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Sarah Jenkins</div>
                            <div class="customer-role">CEO, BloomCell</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-dark">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"A rare engineer who understands business goals. The Edge Functions we implemented are handling 50k+ daily calls without a hitch."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-2.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Arjun Mehta</div>
                            <div class="customer-role">CTO, Webiz</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-left bg-cream">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"The dashboard he designed is hands down the best internal tool we've ever used. Clean, intuitive, and incredibly fast."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-3.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Elena Rodriguez</div>
                            <div class="customer-role">VP Product, Nexus</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"From design to deployment, the process was seamless. Cibirajan takes ownership of everything he touches."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-4.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Chen Wei</div>
                            <div class="customer-role">Lead Engineer, FlowOps</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-left bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"Cibirajan's ability to translate complex logic into seamless UI is unmatched. He didn't just build the app; he refined our entire product strategy."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-1.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Sarah Jenkins</div>
                            <div class="customer-role">CEO, BloomCell</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-dark">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"A rare engineer who understands business goals. The Edge Functions we implemented are handling 50k+ daily calls without a hitch."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-2.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Arjun Mehta</div>
                            <div class="customer-role">CTO, Webiz</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-left bg-cream">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"The dashboard he designed is hands down the best internal tool we've ever used. Clean, intuitive, and incredibly fast."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-3.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Elena Rodriguez</div>
                            <div class="customer-role">VP Product, Nexus</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"From design to deployment, the process was seamless. Cibirajan takes ownership of everything he touches."</p>
                    <div class="customer-meta">
                        <img src="assets/images/avatar-4.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Chen Wei</div>
                            <div class="customer-role">Lead Engineer, FlowOps</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
        this.initSwipe();
    }

    initSwipe() {
        const track = this.querySelector('.ticker-track');
        if (track && window.innerWidth < 768) {
            let startX = 0;
            let currentX = 0;
            let isSwiping = false;

            track.addEventListener('touchstart', (e) => {
                const topCard = track.lastElementChild; 
                if (!topCard) return;
                startX = e.touches[0].clientX;
                isSwiping = true;
                topCard.style.transition = 'none';
            }, { passive: true });

            track.addEventListener('touchmove', (e) => {
                if (!isSwiping) return;
                const topCard = track.lastElementChild;
                currentX = e.touches[0].clientX - startX;
                const rotate = currentX / 10;
                topCard.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
            }, { passive: true });

            track.addEventListener('touchend', () => {
                if (!isSwiping) return;
                isSwiping = false;
                const topCard = track.lastElementChild;
                if (!topCard) return;

                topCard.style.transition = 'transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67), opacity 0.3s ease';

                if (Math.abs(currentX) > 100) {
                    const direction = currentX > 0 ? 'swipe-right' : 'swipe-left';
                    topCard.classList.add(direction);
                    setTimeout(() => {
                        topCard.classList.remove(direction);
                        topCard.style.transform = '';
                        topCard.style.opacity = '1';
                        track.prepend(topCard);
                    }, 500);
                } else {
                    topCard.style.transform = '';
                }
                currentX = 0;
            });
        }
    }
}
customElements.define('customer-reviews', CustomerReviews);

class WorkPhilosophy extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="section section-workethic" id="workethic">
        <div class="section-header">
            <span class="section-label">🧠 Logic & Architecture</span>
            <h2 class="section-title">How I Work</h2>
            <p class="section-subtitle">Deep systems thinking, high-performance architecture, and the philosophy behind my engineering.</p>
        </div>

        <div class="workflow-free-container">
            <svg class="workflow-wave" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
                <path d="M150 150 C300 150 400 450 500 450 C600 450 700 150 850 150 C1000 150 1000 450 1080 450" stroke="rgba(13, 27, 13, 0.08)" stroke-width="3" stroke-dasharray="10 12" stroke-linecap="round" />
            </svg>

            <div class="workflow-node free-node" style="top: 25%; left: 15%;" data-direction="down">
                <div class="node-body">
                    <h3 class="node-title">Discovery</h3>
                    <div class="node-icon">🔍</div>
                    <div class="node-cloud">Understanding the problem, users, and goals before building anything.</div>
                    <div class="node-arrow">
                        <svg viewBox="0 0 100 120" fill="none">
                            <path d="M 51 30 L 50 15 L 64 19 M 51 16 C 70 40 75 75 45 110" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="workflow-node free-node" style="top: 75%; left: 42%;" data-direction="up">
                <div class="node-body">
                    <h3 class="node-title">Build</h3>
                    <div class="node-icon">🏗️</div>
                    <div class="node-cloud">Turning ideas into scalable, high-performance applications.</div>
                    <div class="node-arrow">
                        <svg viewBox="0 0 100 120" fill="none">
                            <path d="M 51 90 L 50 105 L 64 101 M 51 104 C 70 80 75 45 45 10" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="workflow-node free-node" style="top: 25%; left: 70%;" data-direction="down">
                <div class="node-body">
                    <h3 class="node-title">Launch</h3>
                    <div class="node-icon">🚀</div>
                    <div class="node-cloud">Once the product is ready, I ensure a smooth deployment with proper testing and optimization.</div>
                    <div class="node-arrow">
                        <svg viewBox="0 0 100 120" fill="none">
                            <path d="M 51 30 L 50 15 L 64 19 M 51 16 C 70 40 75 75 45 110" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="workflow-node free-node" style="top: 75%; left: 88%;" data-direction="up">
                <div class="node-body">
                    <h3 class="node-title">Scale</h3>
                    <div class="node-icon">📈</div>
                    <div class="node-cloud">Improving, optimizing, and scaling based on real usage.</div>
                    <div class="node-arrow">
                        <svg viewBox="0 0 100 120" fill="none">
                            <path d="M 51 90 L 50 105 L 64 101 M 51 104 C 70 80 75 45 45 10" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}
customElements.define('work-philosophy', WorkPhilosophy);
