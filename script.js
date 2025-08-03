// Typing Animation
const typed = new Typed('.typing', {
    strings: ['Frontend Developer', 'Digital Marketer', 'Shopify Website designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Apply scroll reveal to sections
scrollReveal.reveal('.home-content, .heading', { origin: 'left' });
scrollReveal.reveal('.home-img, .about-img', { origin: 'right' });
scrollReveal.reveal('.about-content, .skills-container, .projects-container, .contact form', { origin: 'bottom' });

// Active Section Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 500)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="number"]').value;
    const subject = form.querySelectorAll('input[type="text"]')[1].value;
    const message = form.querySelector('textarea').value;
    
    // Here you would typically send the data to a server
    console.log({ name, email, phone, subject, message });
    
    // Show success message
    alert('Message sent successfully!');
    form.reset();
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.footer-iconTop a');
scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 10,
        behavior: 'smooth'
    });
});