/* ============================================
   CIBIRAJAN VISVANATHAN — CLOSEFUTURE THEME
   JavaScript — Interactions & Smooth Dynamics
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Navigation Handling =====
    const nav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const heroSection = document.getElementById('hero');

    // Scroll Observer for Nav Visibility & Highlighting
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Hide/Show Nav Logic (User Request: Show only when at home/top)
        const headerNav = document.querySelector('.nav');
        if (headerNav) {
            if (scrolled > 100) {
                headerNav.classList.add('nav-hidden');
            } else {
                headerNav.classList.remove('nav-hidden');
            }
        }

        // Toggle Hero-Active class for nav transparency/darkness
        if (scrolled < window.innerHeight * 0.8) {
            document.body.classList.add('hero-active');
        } else {
            document.body.classList.remove('hero-active');
        }

        // Active Section Tracking
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (scrolled >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    // Initial check
    if (window.scrollY < window.innerHeight * 0.8) {
        document.body.classList.add('hero-active');
    }

    // ===== Persona Zone Interactions =====
    const zones = document.querySelectorAll('.persona-zone');
    const overlays = document.querySelectorAll('.persona-overlay');

    zones.forEach(zone => {
        // Navigation on click
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

        // Synced Overlay Hover
        zone.addEventListener('mouseenter', () => {
            const persona = zone.getAttribute('data-persona');
            const targetOverlay = document.getElementById(`overlay-${persona}`);
            if (targetOverlay) {
                targetOverlay.classList.add('active');
            }
        });

        zone.addEventListener('mouseleave', () => {
            overlays.forEach(o => o.classList.remove('active'));
        });
    });

    // ===== Intersection Observer for Content Reveal =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal to all sections
    document.querySelectorAll('.section-header, .project-card, .philosophy-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // ===== Animated Number Counter =====
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.journey-stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const journeyStats = document.querySelector('.journey-stats');
    if (journeyStats) {
        counterObserver.observe(journeyStats);
    }

    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, duration / steps);
    }

    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K+';
        }
        return num.toString();
    }

    // ===== Smooth Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Dynamic Mobile Side Slider System =====
    const initMobileMenu = () => {
        const navContainer = document.querySelector('.nav-container');
        let navMenuBtn = document.getElementById('navMenuBtn');
        let mobileMenu = document.getElementById('mobileMenu');
        let mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

        // Ensure Hamburger Button exists
        if (!navMenuBtn && navContainer) {
            navMenuBtn = document.createElement('button');
            navMenuBtn.id = 'navMenuBtn';
            navMenuBtn.className = 'hamburger-btn';
            navMenuBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
            navMenuBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
            navContainer.appendChild(navMenuBtn);
        } else if (navMenuBtn && !navMenuBtn.innerHTML.trim()) {
            navMenuBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
        }
        
        // Ensure Overlay exists
        if (!mobileMenuOverlay) {
            mobileMenuOverlay = document.createElement('div');
            mobileMenuOverlay.className = 'mobile-menu-overlay';
            mobileMenuOverlay.id = 'mobileMenuOverlay';
            document.body.appendChild(mobileMenuOverlay);
        }

        // Ensure Drawer exists
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.id = 'mobileMenu';
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <div class="mobile-menu-links">
                    <a href="index.html" class="mobile-link">HOME</a>
                    <a href="index.html#projects" class="mobile-link">PROJECTS</a>
                    <a href="blog.html" class="mobile-link">BLOG</a>
                    <a href="about-us.html" class="mobile-link">ABOUT</a>
                </div>
            `;
            document.body.appendChild(mobileMenu);
        }

        if (navMenuBtn && mobileMenu) {
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
    };

    initMobileMenu();

    // ===== HERO BACKGROUND CLOUD (3D Ambient Orbiting Icons) =====
    const heroCloudContainer = document.getElementById('hero-cloud');
    if (heroCloudContainer && typeof TagCloud !== 'undefined') {
        const iconData = [
            // Core Web & Display
            { slug: 'javascript' }, { slug: 'typescript' }, { slug: 'html5' }, { slug: 'sass' },
            { slug: 'react' }, { slug: 'nextdotjs' }, { slug: 'vuedotjs' }, { slug: 'tailwindcss' }, { slug: 'framer' },
            { slug: 'radixui' }, { slug: 'shadcnui' },
            // Mobile & Apps
            { slug: 'flutter' }, { slug: 'dart' }, { slug: 'android' }, { slug: 'apple' }, { slug: 'pwa' },
            // Backend & Data
            { slug: 'nodedotjs' }, { slug: 'express' }, { slug: 'python' }, { slug: 'fastapi' }, { slug: 'go' },
            { slug: 'postgresql' }, { slug: 'supabase' }, { slug: 'firebase' }, { slug: 'mongodb' }, { slug: 'redis' }, { slug: 'prisma' },
            // Infrastructure & DevOps
            { slug: 'docker' }, { slug: 'kubernetes' }, { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' },
            { slug: 'github' }, { slug: 'git' }, { slug: 'bitbucket' }, { slug: 'postman' }, { slug: 'insomnia' },
            // Design & Creativity
            { slug: 'figma' }, { slug: 'framer' },
            // AI & Future Tech
            { slug: 'anthropic' }, { slug: 'langchain' }, { slug: 'pytorch' },
            // Extra Density (Duplicated for Volume)
            { slug: 'react' }, { slug: 'nextdotjs' }, { slug: 'flutter' }, { slug: 'supabase' }, { slug: 'tailwindcss' },
            { slug: 'nodedotjs' }, { slug: 'postgresql' }, { slug: 'javascript' }, { slug: 'typescript' }, { slug: 'github' },
            { slug: 'docker' }, { slug: 'aws' },
            { slug: 'react' }, { slug: 'nodedotjs' }, { slug: 'flutter' },
            { slug: 'supabase' }, { slug: 'stripe' }, { slug: 'figma' },
            { slug: 'javascript' }, { slug: 'html5' },
            { slug: 'python' }, { slug: 'docker' },
            { slug: 'github' }, { slug: 'git' },
            { slug: 'postgresql' }, { slug: 'mongodb' }, { slug: 'express' },
            { slug: 'typescript' }, { slug: 'android' }, { slug: 'nextdotjs' },
            { slug: 'tailwindcss' }, { slug: 'firebase' }, { slug: 'graphql' },
            { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' },
            { slug: 'postman' }, { slug: 'radixui' }, { slug: 'framer' }, { slug: 'react' }, { slug: 'nodedotjs' }, { slug: 'flutter' },
            { slug: 'supabase' }, { slug: 'stripe' }, { slug: 'figma' },
            { slug: 'javascript' }, { slug: 'html5' },
            { slug: 'python' }, { slug: 'docker' },
            { slug: 'github' }, { slug: 'git' },
            { slug: 'postgresql' }, { slug: 'mongodb' }, { slug: 'express' },
            { slug: 'typescript' }, { slug: 'android' }, { slug: 'nextdotjs' },
            { slug: 'tailwindcss' }, { slug: 'firebase' }, { slug: 'graphql' },
            { slug: 'postgresql' }, { slug: 'mongodb' }, { slug: 'express' },
            { slug: 'typescript' }, { slug: 'android' }, { slug: 'nextdotjs' },
            { slug: 'tailwindcss' }, { slug: 'firebase' }, { slug: 'graphql' },
            { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' },
            { slug: 'postman' }, { slug: 'radixui' }, { slug: 'framer' }, { slug: 'react' }, { slug: 'nodedotjs' }, { slug: 'flutter' },
            { slug: 'supabase' }, { slug: 'stripe' }, { slug: 'figma' },
            { slug: 'javascript' }, { slug: 'html5' },
            { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' },
            { slug: 'postman' }, { slug: 'radixui' }, { slug: 'framer' }, { slug: 'react' }, { slug: 'nodedotjs' }, { slug: 'flutter' },
            { slug: 'supabase' }, { slug: 'stripe' }, { slug: 'figma' },
            { slug: 'javascript' }, { slug: 'html5' },
            { slug: 'python' }, { slug: 'docker' },
            { slug: 'github' }, { slug: 'git' },
            { slug: 'python' }, { slug: 'docker' },
            { slug: 'github' }, { slug: 'git' },
            { slug: 'postgresql' }, { slug: 'mongodb' }, { slug: 'express' },
            { slug: 'typescript' }, { slug: 'android' }, { slug: 'nextdotjs' },
            { slug: 'tailwindcss' }, { slug: 'firebase' }, { slug: 'graphql' },
            { slug: 'googlecloud' }, { slug: 'vercel' }, { slug: 'netlify' },
            { slug: 'postman' }, { slug: 'radixui' }, { slug: 'framer' }
        ];

        let texts = iconData.map(d => d.slug);
        
        // Dynamically clean up density for mobile and tablet processors
        if (window.innerWidth < 768) {
            texts = texts.slice(0, 20); // Massive reduction for mobile
        } else if (window.innerWidth < 1024) {
            texts = texts.slice(0, 45); // Moderate reduction for tablet
        }

        const options = {
            radius: 1100, // Massive 1100px radius to rotate far outside the personas
            maxSpeed: 'slow',
            initSpeed: 'slow',
            direction: 135,
            keep: true,
            useContainerInlineStyles: true,
            containerClass: 'tagcloud',
            itemClass: 'tagcloud--item-icon',
        };

        if (window.innerWidth < 768) {
            options.radius = 350;
        } else if (window.innerWidth < 1024) {
            options.radius = 550;
        }

        const tc = TagCloud(heroCloudContainer, texts, options);

        // Bulletproof injection: Map exactly by slug text
        const injectLogos = () => {
            const items = heroCloudContainer.querySelectorAll('.tagcloud--item-icon');
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

        // Run multiple times as TagCloud calculates positions and might update the DOM
        setTimeout(injectLogos, 300);
        setTimeout(injectLogos, 1000);
    }

    // ===== Scroll To Top Functionality =====
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            // Show button after 300px
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

    // ===== Hire Me Navigation =====
    const hireCloud = document.querySelector('.hire-cloud');
    const resumeSection = document.getElementById('resume-section');

    if (hireCloud && resumeSection) {
        hireCloud.addEventListener('click', () => {
            resumeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // ===== Tinder-Style Swipe for Customers (Mobile) =====
    const track = document.querySelector('.ticker-track');
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
                // Fly off logic
                const direction = currentX > 0 ? 'swipe-right' : 'swipe-left';
                topCard.classList.add(direction);
                
                // Cycle card to the bottom of the stack
                setTimeout(() => {
                    topCard.classList.remove(direction);
                    topCard.style.transform = '';
                    topCard.style.opacity = '1';
                    track.prepend(topCard); // Move to back of the line
                }, 500);
            } else {
                // Snap back if swipe wasn't far enough
                topCard.style.transform = '';
            }
            currentX = 0;
        });
    }

    // ===== Console Signature =====
    console.log('%c Designed with ❤️ by Cibirajan V ', 'background: #D2F171; color: #000; font-weight: bold; border-radius: 4px; padding: 4px;');
});
