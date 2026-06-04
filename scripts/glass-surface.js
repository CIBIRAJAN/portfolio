/* ==========================================================================
   GLASSSURFACE WEB COMPONENT (Translated from React Bits)
   Provides premium SVG-displaced frosted glass distortion / refraction effects.
   ========================================================================== */

class GlassSurface extends HTMLElement {
    static get observedAttributes() {
        return [
            'width', 'height', 'border-radius', 'border-width', 'brightness',
            'opacity', 'blur', 'displace', 'background-opacity', 'saturation',
            'distortion-scale', 'red-offset', 'green-offset', 'blue-offset',
            'x-channel', 'y-channel', 'mix-blend-mode', 'class-name'
        ];
    }

    constructor() {
        super();
        this.uniqueId = 'gs-' + Math.random().toString(36).substr(2, 9);
        this.attachShadow({ mode: 'open' });
        
        // Default properties
        this.props = {
            width: '100%',
            height: '100%',
            borderRadius: 20,
            borderWidth: 0.07,
            brightness: 85,
            opacity: 0.93,
            blur: 11,
            displace: 0,
            backgroundOpacity: 0.45,
            saturation: 1.3,
            distortionScale: -180,
            redOffset: 0,
            greenOffset: 10,
            blueOffset: 20,
            xChannel: 'R',
            yChannel: 'G',
            mixBlendMode: 'difference',
            className: ''
        };

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    position: relative;
                    overflow: hidden;
                    transition: opacity 0.26s ease-out;
                }

                .glass-surface {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                }

                .glass-surface__filter {
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    z-index: -1;
                }

                .glass-surface__content {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: inherit;
                    position: relative;
                    z-index: 1;
                    box-sizing: border-box;
                }

                .glass-surface--svg {
                    background: rgba(255, 255, 255, var(--glass-frost, 0.45));
                    backdrop-filter: var(--filter-id, url(#glass-filter)) saturate(var(--glass-saturation, 1.3));
                    -webkit-backdrop-filter: var(--filter-id, url(#glass-filter)) saturate(var(--glass-saturation, 1.3));
                    box-shadow:
                        0 0 2px 1px rgba(255, 255, 255, 0.6) inset,
                        0 0 10px 4px rgba(255, 255, 255, 0.2) inset,
                        0px 4px 16px rgba(30, 77, 18, 0.06),
                        0px 16px 56px rgba(30, 77, 18, 0.06),
                        0px 4px 16px rgba(255, 255, 255, 0.2) inset;
                }

                .glass-surface--fallback {
                    background: rgba(255, 255, 255, 0.45);
                    backdrop-filter: blur(20px) saturate(1.4) brightness(1.1);
                    -webkit-backdrop-filter: blur(20px) saturate(1.4) brightness(1.1);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow:
                        0 8px 32px 0 rgba(30, 77, 18, 0.08),
                        0 2px 16px 0 rgba(30, 77, 18, 0.04),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);
                }

                @supports not (backdrop-filter: blur(10px)) {
                    .glass-surface--fallback {
                        background: rgba(255, 255, 255, 0.55);
                        box-shadow:
                            inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                            inset 0 -1px 0 0 rgba(255, 255, 255, 0.3);
                    }

                    .glass-surface--fallback::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: inherit;
                        z-index: -1;
                    }
                }

                .glass-surface:focus-visible {
                    outline: 2px solid var(--accent-lime);
                    outline-offset: 2px;
                }
            </style>

            <div class="glass-surface">
                <svg class="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glass-filter-${this.uniqueId}" color-interpolation-filters="sRGB" x="0%" y="0%" width="100%" height="100%">
                            <feImage id="fe-image" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

                            <feDisplacementMap id="fe-disp-red" in="SourceGraphic" in2="map" result="dispRed" />
                            <feColorMatrix in="dispRed" type="matrix"
                                values="1 0 0 0 0
                                        0 0 0 0 0
                                        0 0 0 0 0
                                        0 0 0 1 0" result="red" />

                            <feDisplacementMap id="fe-disp-green" in="SourceGraphic" in2="map" result="dispGreen" />
                            <feColorMatrix in="dispGreen" type="matrix"
                                values="0 0 0 0 0
                                        0 1 0 0 0
                                        0 0 0 0 0
                                        0 0 0 1 0" result="green" />

                            <feDisplacementMap id="fe-disp-blue" in="SourceGraphic" in2="map" result="dispBlue" />
                            <feColorMatrix in="dispBlue" type="matrix"
                                values="0 0 0 0 0
                                        0 0 0 0 0
                                        0 0 1 0 0
                                        0 0 0 1 0" result="blue" />

                            <feBlend in="red" in2="green" mode="screen" result="rg" />
                            <feBlend in="rg" in2="blue" mode="screen" result="output" />
                            <feGaussianBlur id="fe-blur" in="output" stdDeviation="0.7" />
                        </filter>
                    </defs>
                </svg>

                <div class="glass-surface__content">
                    <slot></slot>
                </div>
            </div>
        `;

        this.container = this.shadowRoot.querySelector('.glass-surface');
        this.feImage = this.shadowRoot.querySelector('#fe-image');
        this.redChannel = this.shadowRoot.querySelector('#fe-disp-red');
        this.greenChannel = this.shadowRoot.querySelector('#fe-disp-green');
        this.blueChannel = this.shadowRoot.querySelector('#fe-disp-blue');
        this.gaussianBlur = this.shadowRoot.querySelector('#fe-blur');
    }

    connectedCallback() {
        this.updateProps();
        this.updateSvgSupport();
        this.updateDisplacementMap();
        this.applyFilterSettings();

        this.resizeObserver = new ResizeObserver(() => {
            setTimeout(() => this.updateDisplacementMap(), 0);
        });
        this.resizeObserver.observe(this);

        setTimeout(() => this.updateDisplacementMap(), 0);
    }

    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this.updateProps();
        this.updateDisplacementMap();
        this.applyFilterSettings();
    }

    updateProps() {
        const getNum = (attr, def) => this.hasAttribute(attr) ? parseFloat(this.getAttribute(attr)) : def;
        const getStr = (attr, def) => this.hasAttribute(attr) ? this.getAttribute(attr) : def;

        const wAttr = this.getAttribute('width');
        this.props.width = this.hasAttribute('width') ? (isNaN(wAttr) ? wAttr : parseFloat(wAttr)) : '100%';
        const hAttr = this.getAttribute('height');
        this.props.height = this.hasAttribute('height') ? (isNaN(hAttr) ? hAttr : parseFloat(hAttr)) : '100%';

        this.props.borderRadius = getNum('border-radius', 20);
        this.props.borderWidth = getNum('border-width', 0.07);
        this.props.brightness = getNum('brightness', 50);
        this.props.opacity = getNum('opacity', 0.93);
        this.props.blur = getNum('blur', 11);
        this.props.displace = getNum('displace', 0);
        this.props.backgroundOpacity = getNum('background-opacity', 0.03);
        this.props.saturation = getNum('saturation', 1.4);
        this.props.distortionScale = getNum('distortion-scale', -180);
        this.props.redOffset = getNum('red-offset', 0);
        this.props.greenOffset = getNum('green-offset', 10);
        this.props.blueOffset = getNum('blue-offset', 20);
        this.props.xChannel = getStr('x-channel', 'R');
        this.props.yChannel = getStr('y-channel', 'G');
        this.props.mixBlendMode = getStr('mix-blend-mode', 'difference');
        this.props.className = getStr('class-name', '');

        const width = this.props.width;
        const height = this.props.height;
        this.style.width = typeof width === 'number' ? `${width}px` : width;
        this.style.height = typeof height === 'number' ? `${height}px` : height;
        this.style.borderRadius = `${this.props.borderRadius}px`;
        this.style.setProperty('--glass-frost', this.props.backgroundOpacity);
        this.style.setProperty('--glass-saturation', this.props.saturation);
        this.style.setProperty('--filter-id', `url(#glass-filter-${this.uniqueId})`);
    }

    supportsSVGFilters() {
        // Disabled SVG filters because they are extremely buggy, lack hardware acceleration,
        // and create ugly rainbow distortion artifacts/clipping in modern Chrome browsers.
        // Falling back to hardware-accelerated CSS backdrop-filter ensures cross-browser
        // rendering consistency and crystal clear styling.
        return false;
    }

    updateSvgSupport() {
        const svgSupported = this.supportsSVGFilters();
        this.container.className = `glass-surface ${svgSupported ? 'glass-surface--svg' : 'glass-surface--fallback'} ${this.props.className}`;
    }

    generateDisplacementMap() {
        const rect = this.getBoundingClientRect();
        const actualWidth = rect.width || (typeof this.props.width === 'number' ? this.props.width : 400);
        const actualHeight = rect.height || (typeof this.props.height === 'number' ? this.props.height : 200);
        const edgeSize = Math.min(actualWidth, actualHeight) * (this.props.borderWidth * 0.5);

        const redGradId = `red-grad-${this.uniqueId}`;
        const blueGradId = `blue-grad-${this.uniqueId}`;

        const svgContent = `
            <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stop-color="#0000"/>
                        <stop offset="100%" stop-color="red"/>
                    </linearGradient>
                    <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#0000"/>
                        <stop offset="100%" stop-color="blue"/>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
                <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${this.props.borderRadius}" fill="url(#${redGradId})" />
                <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${this.props.borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${this.props.mixBlendMode}" />
                <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${this.props.borderRadius}" fill="hsl(0 0% ${this.props.brightness}% / ${this.props.opacity})" style="filter:blur(${this.props.blur}px)" />
            </svg>
        `;

        return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
    }

    updateDisplacementMap() {
        if (this.feImage) {
            this.feImage.setAttribute('href', this.generateDisplacementMap());
        }
    }

    applyFilterSettings() {
        [
            { ref: this.redChannel, offset: this.props.redOffset },
            { ref: this.greenChannel, offset: this.props.greenOffset },
            { ref: this.blueChannel, offset: this.props.blueOffset }
        ].forEach(({ ref, offset }) => {
            if (ref) {
                ref.setAttribute('scale', (this.props.distortionScale + offset).toString());
                ref.setAttribute('xChannelSelector', this.props.xChannel);
                ref.setAttribute('yChannelSelector', this.props.yChannel);
            }
        });

        if (this.gaussianBlur) {
            this.gaussianBlur.setAttribute('stdDeviation', this.props.displace.toString());
        }
    }
}

customElements.define('glass-surface', GlassSurface);
