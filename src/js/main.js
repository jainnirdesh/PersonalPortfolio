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

    // Animate skill bars on page load
    document.querySelectorAll('.bar-fill').forEach(function(bar) {
        const width = bar.getAttribute('style').match(/width:\s*(\d+)%/);
        if (width) {
            setTimeout(() => {
                bar.style.width = width[1] + '%';
            }, 300);
        }
    });

    AOS.init();
});

// Additional interactive elements can be added here (e.g., image sliders, pop-up modals)

// Testimonials data
const testimonials = {
    kanishk: {
        text: `I have had the pleasure of knowing Nirdesh Jain as a college mate and a brotherly figure throughout our academic journey. Nirdesh is a natural leader who knows how to bring people together and manage multiple activities efficiently. His ability to coordinate tasks while maintaining a positive team spirit is truly admirable. Whether it’s academic projects or extracurricular events, Nirdesh always steps up and leads with confidence, responsibility, and dedication. He is the kind of person who inspires those around him to do their best.`,
        author: "- Kanishk"
    },
    devraj: {
        text: `I've had the genuine pleasure of working alongside Nirdesh on various projects. His dedication, skill, and positive attitude make him an outstanding collaborator. Nirdesh has a unique ability to tackle challenges with creativity and determination. I am consistently impressed by his professionalism and the quality of his work. He is not only a great team player but also a true friend who supports and motivates others. I wholeheartedly recommend Nirdesh Jain for any endeavor he chooses to pursue.`,
        author: "- Devraj Singh"
    }
    // Add more testimonials here
};

function showTestimonial(key) {
    document.getElementById('full-testimonial').innerText = testimonials[key].text;
    document.getElementById('testimonial-author').innerText = testimonials[key].author;
    document.getElementById('testimonial-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('testimonial-modal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('testimonial-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Dark/Light mode toggle
document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

// Scroll-to-top button functionality
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};
scrollBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};