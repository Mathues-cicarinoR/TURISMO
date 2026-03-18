// Configuração Global do Tailwind
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    turismo: {
                        DEFAULT: '#0077b6',
                        light: '#90e0ef',
                        accent: '#ffb703',
                    },
                    zap: '#25D366'
                }
            }
        }
    }
}

// Inicializações
document.addEventListener('DOMContentLoaded', function () {
    // AOS - Animate On Scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, duration: 800 });
    }

    // Swiper Avaliações (Index)
    if (document.querySelector('.avaliacaoSwiper')) {
        new Swiper(".avaliacaoSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: { delay: 4000 },
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: { 768: { slidesPerView: 2 } }
        });
    }

    // Swiper Individual dos Cards de Tour
    const tourCards = document.querySelectorAll('.group');
    tourCards.forEach(card => {
        const swiperEl = card.querySelector('.tour-swiper');
        if (swiperEl) {
            new Swiper(swiperEl, {
                loop: true,
                autoplay: false,
                pagination: {
                    el: card.querySelector('.swiper-pagination'),
                    clickable: true
                },
                navigation: {
                    nextEl: card.querySelector('.swiper-button-next'),
                    prevEl: card.querySelector('.swiper-button-prev')
                },
            });
        }
    });

    // Swiper de Detalhes (Páginas de Passeio)
    if (document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    // Sistema de Contadores
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0 && document.querySelector('#numeros-section')) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const increment = target / 100;
                    let current = 0;
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            setTimeout(updateCount, 20);
                        } else { counter.innerText = target; }
                    };
                    updateCount();
                });
                observer.unobserve(entries[0].target);
            }
        });
        observer.observe(document.querySelector('#numeros-section'));
    }
});

// Funções Globais
function openModal(cardId) {
    // Placeholder para futura implementação de modal
    console.log("Abrindo modal para: " + cardId);
    alert("Mais informações sobre este passeio em breve!");
}
