document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-image');
    const prevButton = document.querySelector('.nav-button--prev');
    const nextButton = document.querySelector('.nav-button--next');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
            paginationDots[i].classList.toggle('active', i === index);
        });
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    // Event listeners for pagination dots
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});