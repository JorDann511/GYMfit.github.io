document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq__answer').forEach(a => {
                a.style.display = 'none';
            });
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
            }
        });
    });

    // Testimonials Slider
    const slider = document.querySelector('.testimonials__slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // Form Submission
    const testDriveForm = document.querySelector('.test-drive__form');
    
    testDriveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        testDriveForm.reset();
    });
});