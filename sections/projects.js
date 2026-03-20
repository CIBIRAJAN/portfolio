/**
 * @file projects.js
 * @description Dynamic Project Showcase Web Component
 * @module sections/projects
 * 
 * COMMANDS:
 * - connectedCallback(): Initiates the fetching of project data and renders the section.
 * - fetchProjects(): Loads project details from data/projects.json.
 * - render(projects): Maps project data into HTML card structures with staggered animation logic.
 */

class ProjectShowcase extends HTMLElement {
    async connectedCallback() {
        this.renderLoading();
        const pathPrefix = this.getPathPrefix();
        try {
            const response = await fetch(`${pathPrefix}data/projects.json`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const projects = await response.json();
            this.render(projects);
        } catch (error) {
            console.error('Failed to load projects:', error);
            this.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--text-muted);">Error loading projects. Please check console for details.</p>`;
        }
    }

    getPathPrefix() {
        const path = window.location.pathname;
        if (path.toLowerCase().includes('/projects/') || path.toLowerCase().includes('/pages/')) {
            return '../';
        }
        return '';
    }

    renderLoading() {
        this.innerHTML = `
            <section class="section section-projects" id="projects">
                <div class="section-header">
                    <span class="section-label">👉 Builder Mode</span>
                    <h2 class="section-title">What I've Built</h2>
                    <p class="section-subtitle">Loading projects...</p>
                </div>
            </section>
        `;
    }

    render(projects) {
        const pathPrefix = this.getPathPrefix();
        const projectCards = projects.map((project, index) => `
            <div class="project-card-sticky" style="--stack-index: ${index};">
                <a href="${pathPrefix}${project.link}" class="project-card-link">
                    <div class="project-card-content">
                        <div class="project-image-side">
                            <img src="${pathPrefix}${project.image}" alt="${project.title}" class="project-image">
                        </div>
                        <div class="project-info-side">
                            <div class="project-category">${project.category}</div>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tech">
                                ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');

        this.innerHTML = `
    <section class="section section-projects" id="projects">
        <div class="section-header">
            <span class="section-label">👉 Builder Mode</span>
            <h2 class="section-title">What I've Built</h2>
            <p class="section-subtitle">Real products. Real users. Real impact.</p>
        </div>

        <div class="projects-stack-wrapper">
            ${projectCards}
        </div>
    </section>
        `;
    }
}
customElements.define('project-showcase', ProjectShowcase);
