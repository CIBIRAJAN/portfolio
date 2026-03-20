/**
 * @file hero.js
 * @description Home Page Hero Section Web Component
 * @module sections/hero
 * 
 * COMMANDS:
 * - render(): Renders the main headline, interactive persona zones, and tag cloud.
 * - initInteractions(): Enables hover effects and click-to-scroll/navigate on persona zones.
 * - initCloud(): Initializes the 3D rotating tag cloud with technology icons.
 * - injectLogos(): Dynamically fetches and inserts Simple Icons into the tag cloud items.
 */

class HomeHero extends HTMLElement {
    connectedCallback() {
        const pathPrefix = this.getPathPrefix();
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
                <a href="${pathPrefix}pages/about-us.html" class="mobile-hero-link">
                    <img src="${pathPrefix}assets/images/hero/center.webp" alt="Cibirajan" class="mobile-hero-img persona-img" draggable="false">
                </a>
            </div>

            <div class="persona-showcase">
                <div class="persona-zone persona-side persona-builder" data-target="workethic" data-persona="builder">
                    <div class="persona-image-wrap">
                        <img src="${pathPrefix}assets/images/hero/left.webp" alt="Builder Persona" class="persona-img">
                    </div>
                </div>

                <div class="persona-zone persona-center persona-identity" data-target="journey" data-persona="identity">
                    <div class="persona-image-wrap">
                        <img src="${pathPrefix}assets/images/hero/center.webp" alt="Identity Persona" class="persona-img" draggable="false">
                    </div>
                </div>

                <div class="persona-zone persona-side persona-thinker" data-target="projects" data-persona="thinker">
                    <div class="persona-image-wrap">
                        <img src="${pathPrefix}assets/images/hero/right.webp" alt="Thinker Persona" class="persona-img">
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

    getPathPrefix() {
        const path = window.location.pathname;
        if (path.toLowerCase().includes('/projects/') || path.toLowerCase().includes('/pages/')) {
            return '../';
        }
        return '';
    }

    initInteractions() {
        const zones = this.querySelectorAll('.persona-zone');
        const overlays = this.querySelectorAll('.persona-overlay');
        const pathPrefix = this.getPathPrefix();

        zones.forEach(zone => {
            zone.addEventListener('click', () => {
                const persona = zone.getAttribute('data-persona');
                if (persona === 'identity') {
                    window.location.href = `${pathPrefix}pages/about-us.html`;
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
            if (typeof TagCloud === 'undefined') {
                setTimeout(() => this.initCloud(), 200);
            }
            return;
        }

        const iconData = [
            { slug: 'javascript' }, { slug: 'typescript' }, { slug: 'html5' }, { slug: 'sass' },
            { slug: 'react' }, { slug: 'nextdotjs' }, { slug: 'vuedotjs' }, { slug: 'tailwindcss' }, { slug: 'framer' },
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
