// Existing Point Animation Observer
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

    // FAQ See More & See Less Logic
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const seeLessBtn = document.getElementById('seeLessBtn');
    const hiddenItems = document.querySelectorAll('.faq-item.hidden');

    if (seeMoreBtn && seeLessBtn) {
        seeMoreBtn.addEventListener('click', () => {
            hiddenItems.forEach(item => item.classList.remove('hidden'));
            seeMoreBtn.style.display = 'none';
            seeLessBtn.style.display = 'inline-block';
        });

        seeLessBtn.addEventListener('click', () => {
            hiddenItems.forEach(item => item.classList.add('hidden'));
            seeLessBtn.style.display = 'none';
            seeMoreBtn.style.display = 'inline-block';
            window.scrollTo({ top: document.querySelector('.faq-section').offsetTop, behavior: 'smooth' });
        });
    }
});

