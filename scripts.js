// Hamburger toggle with error handling
function toggleMenu() {
    try {
        const navLinks = document.getElementById('nav-links');
        const hamburger = document.getElementById('hamburger');
        if (!navLinks || !hamburger) return;
        
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    } catch (error) {
        console.error('Menu toggle error:', error);
    }
}

// Typing Text with error handling
const texts = [
    "Every Step Tells a Story",
    "Where Rhythm Meets Expression",
    "Dance That Speaks the Soul"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let typingInterval;

function type() {
    try {
        const typingElement = document.getElementById("typing-text");
        if (!typingElement) return;

        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        typingElement.textContent = letter;
        
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            clearTimeout(typingInterval);
            typingInterval = setTimeout(type, 2000);
        } else {
            clearTimeout(typingInterval);
            typingInterval = setTimeout(type, 150);
        }
    } catch (error) {
        console.error('Typing animation error:', error);
    }
}

// Start typing when document is ready
document.addEventListener('DOMContentLoaded', type);

// Carousel with error handling
let slideIndex = 0;
let slideInterval;

function showSlides() {
    try {
        const slides = document.getElementsByClassName("slide");
        if (!slides.length) return;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        clearTimeout(slideInterval);
        slideInterval = setTimeout(showSlides, 4000);
    } catch (error) {
        console.error('Carousel error:', error);
    }
}

// Clean up intervals when page is hidden/inactive
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearTimeout(typingInterval);
        clearTimeout(slideInterval);
    } else {
        type();
        showSlides();
    }
});

// Initialize carousel when document is ready
document.addEventListener('DOMContentLoaded', showSlides);