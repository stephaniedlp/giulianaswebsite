// ============================================
// PORTFOLIO INTERACTIVE FEATURES
// ============================================

// === MUSIC PLAYER ===
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    let isPlaying = false;
    
    // Función para reproducir música
    function playMusic() {
        music.play().then(() => {
            isPlaying = true;
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }).catch(error => {
            console.log('Error al reproducir música:', error);
        });
    }
    
    // Función para pausar música
    function pauseMusic() {
        music.pause();
        isPlaying = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
    
    // Toggle music on button click
    musicControl.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    // Intentar reproducir automáticamente al cargar la página
    // Nota: algunos navegadores bloquean la reproducción automática
    // hasta que el usuario interactúe con la página
    setTimeout(() => {
        playMusic();
    }, 1000);
    
    // Si el navegador bloquea la reproducción automática,
    // reproducir después de cualquier clic del usuario
    let hasInteracted = false;
    document.addEventListener('click', function firstClick() {
        if (!hasInteracted && !isPlaying) {
            playMusic();
            hasInteracted = true;
        }
    }, { once: true });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar todos los elementos con clases de animación
document.querySelectorAll('.reveal-fade, .reveal-text, .reveal-scale, .reveal-slide').forEach(el => {
    observer.observe(el);
});

// === PARALLAX EFFECT ===
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    // Parallax para el background del hero
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax para las tarjetas de trabajo
    const parallaxCards = document.querySelectorAll('.parallax-card');
    parallaxCards.forEach(card => {
        const speed = card.getAttribute('data-speed') || 0.9;
        const cardTop = card.getBoundingClientRect().top;
        const cardOffset = cardTop - window.innerHeight;
        if (cardOffset < 0) {
            card.style.transform = `translateY(${cardOffset * (1 - speed)}px)`;
        }
    });
    
    // Efecto parallax para los items del collage
    const collageItems = document.querySelectorAll('.collage-item');
    collageItems.forEach((item, index) => {
        const speed = 0.5 + (index * 0.1);
        item.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});

// === ACTIVE NAV LINK ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    const scrollPosition = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop - 200) {
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

// === NAVBAR BACKGROUND ON SCROLL ===
const nav = document.querySelector('.glass-nav');
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.15)';
        nav.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// === COLLAGE HOVER EFFECT ===
const collageItems = document.querySelectorAll('.collage-item');

collageItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Aumentar opacidad del container al hacer hover
        const container = document.querySelector('.collage-container');
        container.style.opacity = '0.6';
    });
    
    item.addEventListener('mouseleave', function() {
        const container = document.querySelector('.collage-container');
        container.style.opacity = '0.4';
    });
});

// === LOADING ANIMATION ===
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// === CURSOR EFFECT (OPCIONAL) ===
// Descomentar si quieres un efecto de cursor personalizado
/*
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
*/

console.log('✨ Portfolio loaded successfully!');