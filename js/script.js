document.addEventListener('DOMContentLoaded', function() {
    // Header Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    let slideInterval;

    // Function to change slide
    function changeSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Initialize slider controls
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            changeSlide(currentSlide - 1);
            resetSlideInterval();
        });
        
        nextBtn.addEventListener('click', () => {
            changeSlide(currentSlide + 1);
            resetSlideInterval();
        });
    }

    // Initialize dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeSlide(index);
            resetSlideInterval();
        });
    });

    // Auto slide functionality
    function startSlideInterval() {
        slideInterval = setInterval(() => {
            changeSlide(currentSlide + 1);
        }, 5000);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    // Start auto sliding
    startSlideInterval();

    // Animation for navigation items on scroll
    window.addEventListener('scroll', function() {
        const navItems = document.querySelectorAll('.nav-item');
        const scrollPosition = window.scrollY;
        
        // Add staggered animation to nav items when user scrolls
        if (scrollPosition > 50) {
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateY(0)';
                    item.style.opacity = '1';
                }, 100 * index);
            });
        }
    });

    // Hover effect for emergency call button
    const emergencyCall = document.querySelector('.emergency-call');
    if (emergencyCall) {
        emergencyCall.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        emergencyCall.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
    }

    // Animation du formulaire newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Animation de succès
                emailInput.value = '';
                
                const button = this.querySelector('.btn-subscribe');
                const originalText = button.textContent;
                
                button.innerHTML = '<i class="fas fa-check"></i> Merci !';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 2000);
            }
        });
    }
    
    // Animation des numéros d'urgence
    const emergencyNumbers = document.querySelectorAll('.emergency-number');
    
    emergencyNumbers.forEach(number => {
        // Ajout d'un écouteur d'événements pour mettre en évidence lors du survol
        number.addEventListener('mouseover', function() {
            this.style.fontSize = '1.2em';
            this.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
        });
        
        number.addEventListener('mouseout', function() {
            this.style.fontSize = '';
            this.style.textShadow = '';
        });
    });
    
    // Animation du logo au défilement
    window.addEventListener('scroll', function() {
        const logoElements = document.querySelectorAll('.logo, .logo-small');
        
        logoElements.forEach(logo => {
            // Augmente l'intensité de l'animation de pulsation en fonction du défilement
            const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const pulseScale = 1 + (scrollPercentage * 0.2); // Échelle maximale de 1.2
            
            logo.style.transform = `scale(${pulseScale})`;
        });
    });
    
    // Animation des icônes de la section contact
    const contactIcons = document.querySelectorAll('.contact i');
    
    contactIcons.forEach(icon => {
        // Animation de rotation au survol
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(15deg) scale(1.2)';
            this.style.color = '#ffffff';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.color = '';
        });
    });
    
    // Effet visuel pour la bannière d'urgence
    const emergencyBanner = document.querySelector('.emergency-banner');
    
    if (emergencyBanner) {
        // Pulsation périodique de la bannière pour attirer l'attention
        let pulseInterval = setInterval(() => {
            emergencyBanner.classList.add('pulse-effect');
            
            setTimeout(() => {
                emergencyBanner.classList.remove('pulse-effect');
            }, 1000);
        }, 5000);
        
        // Ajout de style pour l'effet de pulsation
        const style = document.createElement('style');
        style.textContent = `
            .pulse-effect {
                animation: bannerPulse 1s;
            }
            
            @keyframes bannerPulse {
                0%, 100% {
                    background-color: var(--primary-color);
                }
                50% {
                    background-color: #ff8c94;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Fonction pour vérifier si un élément est visible à l'écran
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animation des cartes d'information au défilement
    function animateOnScroll() {
        const cards = document.querySelectorAll('.info-card');
        const statItems = document.querySelectorAll('.stat-item');
        
        cards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            }
        });
        
        statItems.forEach((item, index) => {
            if (isElementInViewport(item)) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    
                    // Animer le cercle de progression si présent
                    const circle = item.querySelector('.circle');
                    if (circle) {
                        const value = item.getAttribute('data-value');
                        circle.style.strokeDasharray = `${value}, 100`;
                    }
                }, 300 * index);
            }
        });
    }

    // Initialiser les styles pour les animations
    const cards = document.querySelectorAll('.info-card');
    const statItems = document.querySelectorAll('.stat-item:not(.emergency-timeline)');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.8s ease';
    });

    // Lancer l'animation au chargement et au défilement
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Animation du zoom des images du slider
    const slideImages = document.querySelectorAll('.slide-image');
    
    function updateSlideImageAnimation() {
        const activeSlide = document.querySelector('.slide.active');
        if (activeSlide) {
            const currentImg = activeSlide.querySelector('.slide-image');
            slideImages.forEach(img => {
                img.classList.remove('active-zoom');
            });
            if (currentImg) {
                currentImg.classList.add('active-zoom');
            }
        }
    }
    
    // Observer les changements sur les slides actifs
    const slideObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                updateSlideImageAnimation();
            }
        });
    });
    
    slides.forEach(slide => {
        slideObserver.observe(slide, { attributes: true });
    });
    
    // Initialiser l'animation pour la première slide
    updateSlideImageAnimation();

    // Effet de pulsation pour la chronologie d'urgence
    const timelineDots = document.querySelectorAll('.timeline-dot');
    timelineDots.forEach((dot, index) => {
        dot.style.animation = `pulsePoint 2s infinite ${index * 0.5}s`;
    });
    
    // Ajouter un style pour l'animation des points de la chronologie
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulsePoint {
            0%, 100% { 
                transform: translateX(-50%) scale(1);
                box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7);
            }
            50% { 
                transform: translateX(-50%) scale(1.5);
                box-shadow: 0 0 0 10px rgba(230, 57, 70, 0);
            }
        }
        
        @keyframes activeZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        
        .active-zoom {
            animation: activeZoom 10s ease forwards;
        }
    `;
    document.head.appendChild(style);

    // Animation pour les étapes d'urgence
    function animateEmergencySteps() {
        const stepCards = document.querySelectorAll('.step-card');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const stepObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        stepCards.forEach(card => {
            // Réinitialiser l'animation pour permettre son déclenchement par l'observateur
            card.style.opacity = '0';
            card.style.transform = 'translateX(-20px)';
            stepObserver.observe(card);
        });
    }
    
    // Animation pour la boîte d'informations d'urgence
    function animateInfoBox() {
        const infoBox = document.querySelector('.emergency-info-box');
        if (infoBox) {
            infoBox.style.opacity = '0';
            infoBox.style.transform = 'translateY(20px)';
            infoBox.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            const infoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        infoBox.style.opacity = '1';
                        infoBox.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.2 });
            
            infoObserver.observe(infoBox);
        }
    }
    
    // Animation pour les conteneurs "à faire" et "à éviter"
    function animateDosDonts() {
        const containers = document.querySelectorAll('.dos-container, .donts-container');
        
        containers.forEach((container, index) => {
            container.style.opacity = '0';
            container.style.transform = 'scale(0.9)';
            container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            const containerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            container.style.opacity = '1';
                            container.style.transform = 'scale(1)';
                        }, index * 200);
                    }
                });
            }, { threshold: 0.2 });
            
            containerObserver.observe(container);
        });
    }
    
    // Animation pour les items de listes
    function animateListItems() {
        const listItems = document.querySelectorAll('.info-list li, .action-list li');
        
        listItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-10px)';
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
            const itemObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, 100 * (index % 5)); // Grouper les animations par 5 items
                    }
                });
            }, { threshold: 0.2 });
            
            itemObserver.observe(item);
        });
    }
    
    // Initialiser toutes les animations de la section d'urgence
    function initEmergencyAnimations() {
        if (document.querySelector('.emergency-process')) {
            animateEmergencySteps();
            animateInfoBox();
            animateDosDonts();
            animateListItems();
        }
    }
    
    // Lancer l'animation et l'observer au défilement
    initEmergencyAnimations();
    window.addEventListener('scroll', initEmergencyAnimations);
});