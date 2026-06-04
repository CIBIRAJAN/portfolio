/**
 * @file philosophy.js
 * @description Work Philosophy and Engineering Process Section Web Component
 * @module sections/philosophy
 * 
 * FEATURES:
 * - 4-column staggered timeline grid matching Apple-style premium aesthetics.
 * - Interactive SVG bezier wave connecting process step circles.
 * - Precise SVG masking animation drawing paths as they enter the viewport.
 * - Interactive frosted glass-surface step cards.
 */

class WorkPhilosophy extends HTMLElement {
    constructor() {
        super();
        this._observer = null;
    }

    connectedCallback() {
        this.render();
        this.initTimelineAnimation();
    }

    initTimelineAnimation() {
        const solidPath = this.querySelector('.workflow-solid-track');
        const maskPath = this.querySelector('.mask-path');
        const dots = this.querySelectorAll('.path-dot');

        // Set initial drawing offsets
        if (solidPath) {
            const solidLen = solidPath.getTotalLength();
            solidPath.style.strokeDasharray = solidLen;
            solidPath.style.strokeDashoffset = solidLen;
        }
        if (maskPath) {
            const maskLen = maskPath.getTotalLength();
            maskPath.style.strokeDasharray = maskLen;
            maskPath.style.strokeDashoffset = maskLen;
        }

        // Set initial opacity for dots
        if (dots && dots.length > 0) {
            dots.forEach(dot => {
                dot.style.opacity = '0';
                dot.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            });
        }

        // Intersection Observer to trigger drawing when section is in view
        this._observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.querySelector('.section-workethic').classList.add('is-visible');
                    
                    // Animate the solid path
                    if (solidPath) {
                        solidPath.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)';
                        solidPath.style.strokeDashoffset = '0';
                    }
                    
                    // Animate the dashed path mask
                    if (maskPath) {
                        maskPath.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
                        // Start dashed line after the solid path is partially drawn
                        setTimeout(() => {
                            maskPath.style.strokeDashoffset = '0';
                        }, 800);
                    }

                    // Staggered fade-in for the connection dots
                    if (dots && dots.length > 0) {
                        dots.forEach((dot, idx) => {
                            const delay = idx < 4 ? (idx * 300) : (1000 + (idx - 4) * 300);
                            setTimeout(() => {
                                dot.style.opacity = '1';
                            }, delay);
                        });
                    }

                    this._observer.unobserve(this);
                }
            });
        }, { threshold: 0.15 });

        this._observer.observe(this);
    }

    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    render() {
        this.innerHTML = `
    <section class="section section-workethic" id="workethic">
        <!-- Ambient Blur Blob -->
        <div class="workflow-glow-blob"></div>

        <div class="workethic-card-container">
            <!-- Decorative Dots Grid -->
            <div class="philosophy-dots-left"></div>
            <div class="philosophy-dots-right"></div>
            
            <!-- Flying Paper Plane SVG -->
            <div class="paper-plane-container">
                <svg class="paper-plane-trail" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 130 C 50 130, 80 50, 150 100 C 200 140, 230 40, 280 20" stroke="#65a30d" stroke-dasharray="4 4" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <div class="paper-plane-icon">
                    <svg viewBox="0 0 24 24" fill="#65a30d" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z"/>
                    </svg>
                </div>
            </div>

            <div class="section-header">
                <span class="section-label">🧠 Logic & Architecture</span>
                <h2 class="section-title"><span class="underline-text">My</span> Process</h2>
                <p class="section-subtitle">Deep systems thinking, high-performance architecture, and the philosophy behind my engineering.</p>
            </div>

            <div class="workflow-timeline-wrapper">
                <!-- SVG Wave Track connecting the nodes -->
                <svg class="workflow-wave" viewBox="0 0 1200 350" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Mask to animate the dashed line path -->
                        <mask id="dashed-mask">
                            <path class="mask-path" d="M 790 120 C 870 120, 930 220, 1010 220" stroke="white" stroke-width="6" stroke-linecap="round" fill="none" />
                        </mask>
                    </defs>
                    
                    <!-- Solid Wave Track connecting Col 1 -> Col 2 -> Col 3 -->
                    <path class="workflow-solid-track" d="M 190 120 C 270 120, 330 220, 410 220 M 490 220 C 570 220, 630 120, 710 120" stroke="#65a30d" stroke-width="3" stroke-linecap="round" fill="none" />
                    
                    <!-- Dashed Wave Track connecting Col 3 -> Col 4 -->
                    <path class="workflow-dashed-track" d="M 790 120 C 870 120, 930 220, 1010 220" stroke="#65a30d" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round" mask="url(#dashed-mask)" fill="none" />
                </svg>

                <div class="workflow-columns">
                    <!-- Column 1: Discovery -->
                    <div class="workflow-column col-discovery">
                        <div class="workflow-node-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span class="workflow-step-num">01</span>
                        </div>
                        <h3 class="workflow-step-title">Discovery</h3>
                        <p class="workflow-step-desc">Understand problems deeply through research, analysis, and exploration.</p>
                        <div class="workflow-step-badge">
                            <span>☆</span> Explore & Understand
                        </div>
                    </div>

                    <!-- Column 2: Build -->
                    <div class="workflow-column col-build">
                        <div class="workflow-node-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                            <span class="workflow-step-num">02</span>
                        </div>
                        <h3 class="workflow-step-title">Build</h3>
                        <p class="workflow-step-desc">Design and build scalable, reliable solutions with clean architecture.</p>
                        <div class="workflow-step-badge">
                            <span>☆</span> Design & Develop
                        </div>
                    </div>

                    <!-- Column 3: Launch -->
                    <div class="workflow-column col-launch">
                        <div class="workflow-node-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
                                <path d="M12 12l9-9-3 12-6 3-3-3-3-6 6-3 9 9" />
                            </svg>
                            <span class="workflow-step-num">03</span>
                        </div>
                        <h3 class="workflow-step-title">Launch</h3>
                        <p class="workflow-step-desc">Deploy with confidence and ensure a smooth go-live experience.</p>
                        <div class="workflow-step-badge">
                            <span>☆</span> Deploy & Deliver
                        </div>
                    </div>

                    <!-- Column 4: Scale -->
                    <div class="workflow-column col-scale">
                        <div class="workflow-node-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                                <path d="M3 20h18"></path>
                                <path d="M3 16.5L10 9.5L14 13.5L21 6.5"></path>
                            </svg>
                            <span class="workflow-step-num">04</span>
                        </div>
                        <h3 class="workflow-step-title">Scale</h3>
                        <p class="workflow-step-desc">Optimize, monitor, and scale systems for long-term impact.</p>
                        <div class="workflow-step-badge">
                            <span>☆</span> Optimize & Scale
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}
customElements.define('work-philosophy', WorkPhilosophy);

