/**
 * @file philosophy.js
 * @description Work Philosophy and Engineering Logic Section Web Component
 * @module sections/philosophy
 * 
 * COMMANDS:
 * - render(): Renders the interactive workflow nodes with animated SVGs.
 */

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
