document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.animation = `cardFadeIn 1s ease-in-out ${index * 0.5}s forwards`;
    });
});

/* Additional keyframe animations */
@keyframes cardFadeIn {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}
