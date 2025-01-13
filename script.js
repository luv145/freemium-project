// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = '#fff';
    }
});

// Mobile Menu Functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');

// Toggle menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// References Modal Functionality
const showReferencesBtn = document.getElementById('showReferences');
const referencesModal = document.getElementById('referencesModal');
const closeReferencesBtn = document.getElementById('closeReferences');

showReferencesBtn.addEventListener('click', () => {
    referencesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeReferencesBtn.addEventListener('click', () => {
    referencesModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
referencesModal.addEventListener('click', (e) => {
    if (e.target === referencesModal) {
        referencesModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && referencesModal.classList.contains('active')) {
        referencesModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
