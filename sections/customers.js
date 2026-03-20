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
    connectedCallback() {
        this.innerHTML = `
    <section class="section section-customers" id="customers">
        <div class="section-header text-center">
            <span class="section-label">🤝 Collaboration</span>
            <h2 class="section-title">Our Happy Customers</h2>
            <p class="section-subtitle">Real feedback from teams I've helped scale and succeed.</p>
        </div>

        <div class="marquee-ticker">
            <div class="ticker-track">
                <div class="customer-card tilt-left bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"Cibirajan's ability to translate complex logic into seamless UI is unmatched. He didn't just build the app; he refined our entire product strategy."</p>
                    <div class="customer-meta">
                        <img src="assets/images/icons/avatar-1.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Sarah Jenkins</div>
                            <div class="customer-role">CEO, BloomCell</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-dark">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"A rare engineer who understands business goals. The Edge Functions we implemented are handling 50k+ daily calls without a hitch."</p>
                    <div class="customer-meta">
                        <img src="assets/images/icons/avatar-2.png" alt="Arjun M" class="customer-avatar">
                        <div>
                            <div class="customer-name">Arjun Mehta</div>
                            <div class="customer-role">CTO, Webiz</div>
                        </div>
                    </div>
                </div>
                <!-- Duplicate for Marquee Effect -->
                <div class="customer-card tilt-left bg-cream">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"The dashboard he designed is hands down the best internal tool we've ever used. Clean, intuitive, and incredibly fast."</p>
                    <div class="customer-meta">
                        <img src="assets/images/icons/avatar-3.png" alt="Elena R" class="customer-avatar">
                        <div>
                            <div class="customer-name">Elena Rodriguez</div>
                            <div class="customer-role">VP Product, Nexus</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"From design to deployment, the process was seamless. Cibirajan takes ownership of everything he touches."</p>
                    <div class="customer-meta">
                        <img src="assets/images/icons/avatar-4.png" alt="Chen W" class="customer-avatar">
                        <div>
                            <div class="customer-name">Chen Wei</div>
                            <div class="customer-role">Lead Engineer, FlowOps</div>
                        </div>
                    </div>
                </div>
                <!-- Additional clones for smooth infinite loop -->
                <div class="customer-card tilt-left bg-lime">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"Cibirajan's ability to translate complex logic into seamless UI is unmatched."</p>
                    <div class="customer-meta">
                        <img src="assets/images/icons/avatar-1.png" alt="Sarah J" class="customer-avatar">
                        <div>
                            <div class="customer-name">Sarah Jenkins</div>
                            <div class="customer-role">CEO, BloomCell</div>
                        </div>
                    </div>
                </div>
                <div class="customer-card tilt-right bg-dark">
                    <div class="rating">★★★★★</div>
                    <p class="review-text">"The Edge Functions we implemented are handling 50k+ daily calls without a hitch."</p>
                    <div class="customer-meta">
                        <img src="assets/images/icons/avatar-2.png" alt="Arjun M" class="customer-avatar">
                        <div>
                            <div class="customer-name">Arjun Mehta</div>
                            <div class="customer-role">CTO, Webiz</div>
                        </div>
                    </div>
                </div>
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
}
customElements.define('customer-reviews', CustomerReviews);
