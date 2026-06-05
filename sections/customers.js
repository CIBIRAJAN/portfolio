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
        let reviews = null;
        try {
            const cached = localStorage.getItem('portfolio_reviews');
            if (cached) {
                reviews = JSON.parse(cached);
            }
        } catch (e) {}

        if (reviews && reviews.length > 0) {
            this.render(reviews);
        } else {
            // Render default fallbacks immediately
            reviews = this.getFallbackReviews();
            this.render(reviews);
        }
        
        try {
            await this.waitForSupabase();
            
            const { data: remoteReviews, error } = await this.supabase
                .from('customers')
                .select('*')
                .eq('is_archive', false)
                .order('created_at', { ascending: true });

            if (error) throw error;
            
            if (remoteReviews) {
                const dataChanged = JSON.stringify(reviews) !== JSON.stringify(remoteReviews);
                if (dataChanged) {
                    this.render(remoteReviews);
                    try {
                        localStorage.setItem('portfolio_reviews', JSON.stringify(remoteReviews));
                    } catch (e) {}
                }
            }
        } catch (error) {
            console.error('Failed to load customers from Supabase in background:', error);
        }
    }

    getFallbackReviews() {
        return [
            {
                name: "Sarah Jenkins",
                role: "CEO, BloomCell",
                review: "Cibirajan's ability to translate complex logic into seamless UI is unmatched. He didn't just build the app; he refined our entire product strategy.",
                avatar: "https://kfcqfaqkxbsvjatzjxfd.supabase.co/storage/v1/object/public/portfolio/avatars/avatar-1.png",
                rating: 5,
                bg_class: "bg-lime",
                tilt_class: "tilt-left"
            },
            {
                name: "Arjun Mehta",
                role: "CTO, Webiz",
                review: "A rare engineer who understands business goals. The Edge Functions we implemented are handling 50k+ daily calls without a hitch.",
                avatar: "https://kfcqfaqkxbsvjatzjxfd.supabase.co/storage/v1/object/public/portfolio/avatars/avatar-2.png",
                rating: 5,
                bg_class: "bg-dark",
                tilt_class: "tilt-right"
            },
            {
                name: "Elena Rodriguez",
                role: "VP Product, Nexus",
                review: "The dashboard he designed is hands down the best internal tool we've ever used. Clean, intuitive, and incredibly fast.",
                avatar: "https://kfcqfaqkxbsvjatzjxfd.supabase.co/storage/v1/object/public/portfolio/avatars/avatar-3.png",
                rating: 5,
                bg_class: "bg-cream",
                tilt_class: "tilt-left"
            },
            {
                name: "Chen Wei",
                role: "Lead Engineer, FlowOps",
                review: "From design to deployment, the process was seamless. Cibirajan takes ownership of everything he touches.",
                avatar: "https://kfcqfaqkxbsvjatzjxfd.supabase.co/storage/v1/object/public/portfolio/avatars/avatar-4.png",
                rating: 5,
                bg_class: "bg-lime",
                tilt_class: "tilt-right"
            }
        ];
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
        // Kept for backward compatibility
    }

    render(reviews) {
        if (!reviews || reviews.length === 0) {
            this.innerHTML = '';
            return;
        }
        const pathPrefix = this.getPathPrefix ? this.getPathPrefix() : '';
        const getGlassProps = (bgClass) => {
            if (bgClass === 'bg-lime') {
                return 'background-opacity="0.55" brightness="92" saturation="1.5"';
            } else if (bgClass === 'bg-dark') {
                return 'background-opacity="0.85" brightness="25" saturation="1.1"';
            } else {
                return 'background-opacity="0.45" brightness="85" saturation="1.3"';
            }
        };

        const reviewCards = reviews.map(review => `
            <glass-surface class="customer-card ${review.tilt_class}" border-radius="32" width="450" height="auto" ${getGlassProps(review.bg_class)}>
                <div style="padding: 30px; box-sizing: border-box; width: 100%; text-align: left;">
                    <div class="rating" style="color: var(--accent-gold); margin-bottom: 20px; font-size: 1rem; letter-spacing: 2px;">${'★'.repeat(review.rating)}</div>
                    <p class="review-text" style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 24px; color: var(--text-primary);">"${review.review}"</p>
                    <div class="customer-meta" style="display: flex; align-items: center; gap: 16px;">
                        <img src="${review.avatar.startsWith('http') ? review.avatar : pathPrefix + review.avatar}" alt="${review.name}" class="customer-avatar" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255, 255, 255, 0.1);">
                        <div>
                            <div class="customer-name" style="font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; color: var(--text-primary);">${review.name}</div>
                            <div class="customer-role" style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">${review.role}</div>
                        </div>
                    </div>
                </div>
            </glass-surface>
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
