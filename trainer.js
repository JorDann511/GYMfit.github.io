// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add any additional interactive features here
    const trainerCards = document.querySelectorAll('.trainer-card');

    trainerCards.forEach(card => {
        // Add focus states for accessibility
        card.addEventListener('focus', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('blur', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});