document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const radioLabels = document.querySelectorAll('.navigation label');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
        
        radioLabels[currentSlide].style.transition = 'background-color 0.5s';
        radioLabels[currentSlide].style.backgroundColor = 'red';
    }

    function nextSlide() {
        radioLabels[currentSlide].style.transition = '';
        radioLabels[currentSlide].style.backgroundColor = '';

        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
});