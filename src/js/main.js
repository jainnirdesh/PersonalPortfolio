// JavaScript code for interactivity in the personal portfolio website

document.addEventListener('DOMContentLoaded', function () {
    // Contact form validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            let valid = true;
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const subject = form.subject.value.trim();
            const message = form.message.value.trim();

            // Simple validation
            if (!name) valid = false;
            if (!email || !validateEmail(email)) valid = false;
            if (!subject) valid = false;
            if (!message) valid = false;

            if (!valid) {
                alert('Please fill out all required fields with valid information.');
                e.preventDefault();
            }
        });

        function validateEmail(email) {
            // Simple email regex
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Additional interactive elements can be added here (e.g., image sliders, pop-up modals)