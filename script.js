/**
 * Script.js para o "O Grande Portal de Westeros"
 * Inclui: Rolagem Suave e Fade-In dos Cards.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ROLAGEM SUAVE (Smooth Scrolling) ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Verifica se o link é uma âncora interna
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. FADE-IN DOS CARDS (Intersection Observer) ---
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        // O card é considerado visível quando 10% dele aparece na tela
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Para de observar depois que o efeito é aplicado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});