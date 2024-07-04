document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { id: 'userCount', endValue: 112000 },
        { id: 'happyUsers', endValue: 100000 },
        { id: 'fiveStarRatings', endValue: 80000 },
        { id: 'projectSuccess', endValue: 95000 }
    ];

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const endValue = counters.find(c => c.id === counter.id).endValue;
                animateCount(counter, endValue);
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        observer.observe(element);
    });

    function animateCount(element, endValue) {
        let startValue = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / endValue));
        const timer = setInterval(() => {
            startValue += 1;
            element.textContent = startValue.toLocaleString();
            if (startValue === endValue) {
                clearInterval(timer);
            }
        }, stepTime);
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
