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

    // Note: Persona Zone interactions are now handled within the <home-hero> component.

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

    // Note: Mobile menu system is now handled within the <global-nav> component.

    // Note: TagCloud background is now initialized within the <home-hero> component.

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

    // Note: Customer swipe logic is now handled within the <customer-reviews> component.

    // ===== Console Signature =====
    console.log('%c Designed with ❤️ by Cibirajan V ', 'background: #D2F171; color: #000; font-weight: bold; border-radius: 4px; padding: 4px;');
});
