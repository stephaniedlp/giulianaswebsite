// ===================================
// PORTFOLIO & BLOG - JAVASCRIPT
// ===================================

// === PARALLAX EFFECT ===
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-speed'));
            const yPos = -(window.pageYOffset * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// === SCROLL REVEAL ANIMATIONS ===
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.reveal-fade, .reveal-text, .reveal-scale, .reveal-slide'
    );
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
}

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === FADE IN ANIMATION WITH DELAY ===
function initFadeIn() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((el, index) => {
        const delay = el.getAttribute('data-delay') || 0;
        el.style.animationDelay = `${delay}s`;
    });
}

// === NAVBAR BACKGROUND ON SCROLL ===
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
}

// === LOAD MORE BUTTON ===
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.glass-button');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Add your load more logic here
            console.log('Load more posts...');
            
            // Example: Show loading state
            loadMoreBtn.textContent = 'Loading...';
            
            // Simulate loading
            setTimeout(() => {
                loadMoreBtn.textContent = 'Load More Posts';
                // Add new posts to .blog-grid here
            }, 1000);
        });
    }
}

// === PARALLAX CARD EFFECT ON MOUSE MOVE ===
function initCardParallax() {
    const cards = document.querySelectorAll('.parallax-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// === CURSOR FOLLOW EFFECT (OPTIONAL) ===
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #1a1a1a;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s, opacity 0.2s;
        opacity: 0;
    `;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .work-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// === IMAGE LAZY LOADING ===
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// === ACTIVE NAV LINK ON SCROLL ===
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// === INITIALIZE ALL ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized!');
    
    initParallax();
    initScrollReveal();
    initSmoothScroll();
    initFadeIn();
    initNavbarScroll();
    initLoadMore();
    initCardParallax();
    // initCursorEffect(); // Uncomment if you want custom cursor
    initLazyLoad();
    initActiveNav();
});

// === RESIZE HANDLER ===
window.addEventListener('resize', () => {
    // Reinitialize parallax on resize
    initParallax();
});

// === PERFORMANCE OPTIMIZATION ===
// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttle to scroll events if needed
const throttledScroll = throttle(() => {
    // Add throttled scroll logic here if needed
}, 100);

window.addEventListener('scroll', throttledScroll);
