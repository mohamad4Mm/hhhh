document.addEventListener("DOMContentLoaded", function () {
    // Elements that should receive scroll animations
    const elements = document.querySelectorAll(`
    section > div > div, 
    h1, h2, h3, 
    p, 
    img, 
    .bg-surface-container-lowest, 
    .bg-surface-container-low, 
    .bg-primary,
    button
  `);

    elements.forEach((el, index) => {
        // Don't override if manually set or if it's the header/nav
        if (!el.hasAttribute('data-aos') && !el.closest('header') && !el.closest('nav')) {
            el.setAttribute('data-aos', 'fade-up');
            // Stagger the delay slightly for siblings
            const delay = (index % 4) * 100;
            el.setAttribute('data-aos-delay', delay.toString());
        }
    });

    // Initialize AOS Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }
});
