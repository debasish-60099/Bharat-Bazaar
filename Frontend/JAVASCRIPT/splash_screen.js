const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 300); 
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".point").forEach(point => {
        observer.observe(point);
    });
});

