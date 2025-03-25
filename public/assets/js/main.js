document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < 2) { // Assuming there are 3 testimonials
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});

// Initialisation des animations AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 300,
        once: true,
        offset: 100,
        disable: 'mobile'
    });

    // Gestion du menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Fermer le menu mobile lors du clic sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });

        // Fermer le menu mobile lors du défilement
        window.addEventListener('scroll', function() {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Gestion des dropdowns
    document.querySelectorAll(".group").forEach((dropdown) => {
        const menu = dropdown.querySelector("div.absolute");
        if (!menu) return;

        let timeoutId;

        dropdown.addEventListener("mouseenter", () => {
            clearTimeout(timeoutId);
            menu.classList.remove("hidden");
            menu.classList.add("opacity-100", "translate-y-0");
        });

        dropdown.addEventListener("mouseleave", () => {
            timeoutId = setTimeout(() => {
                menu.classList.add("hidden");
                menu.classList.remove("opacity-100", "translate-y-0");
            }, 100); // Ajout d'un délai avant fermeture
        });

        menu.addEventListener("mouseenter", () => {
            clearTimeout(timeoutId); // Empêche la fermeture si la souris va sur le menu
        });

        menu.addEventListener("mouseleave", () => {
            timeoutId = setTimeout(() => {
                menu.classList.add("hidden");
                menu.classList.remove("opacity-100", "translate-y-0");
            }, 100); // Même délai avant fermeture
        });
    });

    // Animation des compteurs avec IntersectionObserver
    const counters = document.querySelectorAll('.counter');
    const options = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = current.toFixed(1);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, options);

    counters.forEach(counter => observer.observe(counter));

    // Configuration des particules avec gestion des erreurs
    try {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80 },
                color: { value: '#4F46E5' },
                shape: { type: 'circle' },
                opacity: { 
                    value: 0.5,
                    random: false
                },
                size: { 
                    value: 3,
                    random: true 
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    out_mode: 'out',
                    bounce: false
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4F46E5',
                    opacity: 0.2,
                    width: 1
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });

        particlesJS('particles-js-2', {
            particles: {
                number: { value: 40 },
                color: { value: '#4F46E5' },
                shape: { type: 'circle' },
                opacity: { 
                    value: 0.3,
                    random: false
                },
                size: { 
                    value: 2,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    } catch (error) {
        console.warn('Erreur lors de l\'initialisation des particules:', error);
    }
});

// Gestion du scroll fluide pour les ancres
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

// Optimisation des performances
window.addEventListener('load', () => {
    // Chargement différé des images non critiques
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback pour les navigateurs qui ne supportent pas le lazy loading natif
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
        lazyLoadScript.onload = function() {
            const observer = lozad();
            observer.observe();
        };
        document.body.appendChild(lazyLoadScript);
    }
});

function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    
    // Toggle content visibility
    content.classList.toggle('hidden');
    
    // Rotate icon
    icon.classList.toggle('rotate-180');
    
    // Add hover effect to parent
    button.parentElement.classList.toggle('bg-gray-700');
}

// Configuration des particules pour le footer
try {
    particlesJS('particles-js-footer', {
        particles: {
            number: { value: 20 },
            color: { value: '#4F46E5' },
            shape: { type: 'circle' },
            opacity: { 
                value: 0.1,
                random: false
            },
            size: { 
                value: 2,
                random: true
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                resize: true
            }
        },
        retina_detect: true
    });
} catch (error) {
    console.warn('Erreur lors de l\'initialisation des particules du footer:', error);
}
