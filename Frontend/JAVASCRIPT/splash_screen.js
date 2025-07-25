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

// Scroll Animation for Sections
document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll('.animate');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    animatedSections.forEach(sec => {
      const sectionTop = sec.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        sec.classList.add('show');
      } else {
        sec.classList.remove('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

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
      window.scrollTo({
        top: document.querySelector('.faq-section').offsetTop - 50,
        behavior: 'smooth'
      });
    });
  }
});
