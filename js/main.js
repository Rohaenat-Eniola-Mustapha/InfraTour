document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("user-counter");
    let count = 0;
    const target = 100000;

    const updateCounter = () => {
        if (count < target) {
            count++;
            counter.innerText = count.toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });

    observer.observe(counter);
});
