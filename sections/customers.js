/**
 * @file customers.js
 * @description Customer Reviews Section Web Component
 * @module sections/customers
 * 
 * COMMANDS:
 * - render(): Renders the customer feedback marquee.
 * - initSwipe(): Enables card-swiping interaction for touch devices.
 */

class CustomerReviews extends HTMLElement {
    constructor() {
        super();
        this.supabase = null;
    }

    async connectedCallback() {
        this.renderLoading();
        
        try {
            await this.waitForSupabase();
            
            const { data: reviews, error } = await this.supabase
                .from('customers')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) throw error;
            this.render(reviews);
        } catch (error) {
            console.error('Failed to load customers from Supabase:', error);
            this.render([]); // Render empty or static fallback
        }
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
        this.innerHTML = `
            <section class="section section-customers" id="customers">
                <div class="section-header text-center">
                    <span class="section-label">🤝 Collaboration</span>
                    <h2 class="section-title">Our Happy Customers</h2>
                    <p class="section-subtitle">Loading reviews...</p>
                </div>
            </section>
        `;
    }

    render(reviews) {
        const pathPrefix = this.getPathPrefix ? this.getPathPrefix() : '';
        const reviewCards = reviews.map(review => `
            <div class="customer-card ${review.tilt_class} ${review.bg_class}">
                <div class="rating">${'★'.repeat(review.rating)}</div>
                <p class="review-text">"${review.review}"</p>
                <div class="customer-meta">
                    <img src="${review.avatar.startsWith('http') ? review.avatar : pathPrefix + review.avatar}" alt="${review.name}" class="customer-avatar">
                    <div>
                        <div class="customer-name">${review.name}</div>
                        <div class="customer-role">${review.role}</div>
                    </div>
                </div>
            </div>
        `).join('');

        this.innerHTML = `
            <section class="section section-customers" id="customers">
                <div class="section-header text-center">
                    <span class="section-label">🤝 Collaboration</span>
                    <h2 class="section-title">Our Happy Customers</h2>
                    <p class="section-subtitle">Real feedback from teams I've helped scale and succeed.</p>
                </div>

                <div class="marquee-ticker">
                    <div class="ticker-track">
                        ${reviewCards}
                        ${reviewCards} <!-- Duplicate for marquee -->
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

    getPathPrefix() {
        const path = window.location.pathname;
        if (path.toLowerCase().includes('/projects/') || path.toLowerCase().includes('/pages/')) {
            return '../';
        }
        return '';
    }
}
customElements.define('customer-reviews', CustomerReviews);
