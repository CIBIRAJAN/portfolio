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
    constructor() {
        super();
        this.supabase = null;
        this.images = {
            hero_left: 'assets/images/hero/left.webp',
            hero_center: 'assets/images/hero/center.webp',
            hero_right: 'assets/images/hero/right.webp'
        };
    }

    async connectedCallback() {
        // Render immediately using default/cached/fallback images
        this.render();
        
        try {
            await this.waitForSupabase();
            const { data, error } = await this.supabase
                .from('section_images')
                .select('section_name, image_url');

            if (!error && data) {
                let updated = false;
                data.forEach(item => {
                    if (this.images[item.section_name] !== item.image_url) {
                        this.images[item.section_name] = item.image_url;
                        updated = true;
                    }
                });
                if (updated) {
                    this.updateImages();
                }
            }
        } catch (e) {
            console.warn('Hero using local fallbacks');
        }
    }

    updateImages() {
        const pathPrefix = this.getPathPrefix();
        const getImg = (key) => this.images[key].startsWith('http') ? this.images[key] : pathPrefix + this.images[key];

        const mobileImg = this.querySelector('.mobile-hero-img');
        if (mobileImg) mobileImg.src = getImg('hero_center');

        const builderImg = this.querySelector('.persona-builder .persona-img');
        if (builderImg) builderImg.src = getImg('hero_left');

        const identityImg = this.querySelector('.persona-identity .persona-img');
        if (identityImg) identityImg.src = getImg('hero_center');

        const thinkerImg = this.querySelector('.persona-thinker .persona-img');
        if (thinkerImg) thinkerImg.src = getImg('hero_right');
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

    renderLoading() {
        // Kept for backward compatibility but no longer blocking
    }

    render() {
        const pathPrefix = this.getPathPrefix();
        const getImg = (key) => this.images[key].startsWith('http') ? this.images[key] : pathPrefix + this.images[key];

        this.innerHTML = `
    <section class="hero" id="hero">
        <div class="hero-bg-shapes">
            <div class="dotted-grid-left"></div>
            <div class="dotted-grid-right"></div>
            <div class="dotted-grid-bottom-left"></div>
            <div class="dotted-grid-bottom-right"></div>
            <div class="hero-radial-glow"></div>
            <div class="hero-dashed-arch"></div>
            

            
            <svg class="contour-line contour-top-left" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100,50 Q100,100 150,250 T300,450" stroke="rgba(78, 132, 53, 0.12)" stroke-width="1.5" fill="none"/>
                <path d="M-50,0 Q150,50 200,200 T350,400" stroke="rgba(78, 132, 53, 0.08)" stroke-width="1.2" fill="none"/>
            </svg>
            <svg class="contour-line contour-bottom-right" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,450 Q250,300 300,150 T450,-50" stroke="rgba(78, 132, 53, 0.12)" stroke-width="1.5" fill="none"/>
                <path d="M50,400 Q200,250 250,100 T400,-100" stroke="rgba(78, 132, 53, 0.08)" stroke-width="1.2" fill="none"/>
            </svg>
        </div>

        <div id="hero-cloud" class="hero-cloud-bg"></div>

        <div class="hero-main-cta">
            <h1 class="hero-main-headline">
                <span class="hero-headline-top">BUILDING APP THAT</span>
                <span class="hero-headline-accent">Scale to High</span>
            </h1>
            <a href="#projects" class="hero-works-btn">
                WORKS
                <span class="arrow-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </span>
            </a>
        </div>

        <div class="hero-visual-container">
            <div class="mobile-hero-visual">
                <a href="${pathPrefix}pages/about-us.html" class="mobile-hero-link">
                    <img src="${getImg('hero_center')}" alt="Cibirajan" class="mobile-hero-img persona-img" draggable="false">
                </a>
            </div>

            <div class="persona-showcase">
                <div class="persona-zone persona-side persona-builder" data-target="workethic" data-persona="builder">
                    <div class="persona-image-wrap">
                        <img src="${getImg('hero_left')}" alt="Builder Persona" class="persona-img">
                    </div>
                </div>

                <div class="persona-zone persona-center persona-identity" data-target="journey" data-persona="identity">
                    <div class="persona-image-wrap">
                        <img src="${getImg('hero_center')}" alt="Identity Persona" class="persona-img" draggable="false">
                        <div class="mobile-hire-arrow">
                            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M70 10 C70 80 50 110 10 110" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
                                <path d="M22 100L10 110L22 120" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="persona-zone persona-side persona-thinker" data-target="projects" data-persona="thinker">
                    <div class="persona-image-wrap">
                        <img src="${getImg('hero_right')}" alt="Thinker Persona" class="persona-img">
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
        const mainCta = this.querySelector('.hero-main-cta');
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

            // Hover interactions
            zone.addEventListener('mouseenter', () => {
                const persona = zone.getAttribute('data-persona');
                const targetOverlay = this.querySelector(`#overlay-${persona}`);
                if (targetOverlay) {
                    targetOverlay.classList.add('active');
                }
                if (mainCta) {
                    mainCta.style.opacity = '0';
                    mainCta.style.pointerEvents = 'none';
                }
            });

            zone.addEventListener('mouseleave', () => {
                overlays.forEach(o => o.classList.remove('active'));
                if (mainCta) {
                    mainCta.style.opacity = '1';
                    mainCta.style.pointerEvents = 'auto';
                }
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
