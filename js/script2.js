const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
        const images = document.querySelectorAll('.carousel img');
        let currentImageIndex = 0;

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateCarousel();
        }

        function updateCarousel() {
            const offset = -currentImageIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        setInterval(nextImage, 5000); // Avança a cada 5 segundos

        // Inicializa o carrossel
        updateCarousel();