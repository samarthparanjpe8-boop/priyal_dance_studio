/* ===== Hamburger Menu ===== */
const burger = document.getElementById('hamburger');
const menu = document.getElementById('nav-links');

function toggleMenu() {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

burger.addEventListener('click', toggleMenu);

// Close on link click (mobile)
document.querySelectorAll('#nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ===== Typing Effect ===== */
const phrases = [
  'Every Step Tells a Story',
  'Where Rhythm Meets Expression',
  'Dance That Speaks the Soul'
];
let p = 0, i = 0, tTimer;

function type() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const word = phrases[p % phrases.length];
  el.textContent = word.slice(0, ++i);
  if (i === word.length) {
    setTimeout(() => {
      i = 0;
      p++;
      type();
    }, 1400);
  } else {
    clearTimeout(tTimer);
    tTimer = setTimeout(type, 110);
  }
}

document.addEventListener('DOMContentLoaded', type);

/* ===== Enhanced Carousel ===== */
let slideIdx = 0;
let slideTimer;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

function showSlide(index) {
  // Remove active class from all slides and indicators
  slides.forEach(s => s.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));
  
  // Ensure index is within bounds
  if (index < 0) {
    slideIdx = slides.length - 1;
  } else if (index >= slides.length) {
    slideIdx = 0;
  } else {
    slideIdx = index;
  }
  
  // Add active class to current slide and indicator
  slides[slideIdx].classList.add('active');
  if (indicators[slideIdx]) {
    indicators[slideIdx].classList.add('active');
  }
}

function nextSlide() {
  showSlide(slideIdx + 1);
  resetTimer();
}

function prevSlide() {
  showSlide(slideIdx - 1);
  resetTimer();
}

function goToSlide(index) {
  showSlide(index);
  resetTimer();
}

function resetTimer() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => {
    nextSlide();
  }, 4000);
}

function initCarousel() {
  if (slides.length === 0) return;
  
  // Initialize first slide
  showSlide(0);
  
  // Set up navigation buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  // Set up indicators
  indicators.forEach((ind, index) => {
    ind.addEventListener('click', () => goToSlide(index));
  });
  
  // Auto-play
  resetTimer();
  
  // Pause on hover
  const carousel = document.querySelector('.Intro-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => {
      clearTimeout(slideTimer);
    });
    carousel.addEventListener('mouseleave', () => {
      resetTimer();
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
}

document.addEventListener('DOMContentLoaded', initCarousel);

/* ===== Scroll Reveal ===== */
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===== Form Submission ===== */
const bookingForm = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');
const sendBtn = document.querySelector('.send-btn');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');

if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      classLevel: document.getElementById('class-level').value,
      message: document.getElementById('msg').value.trim()
    };
    
    // Validate
    if (!formData.name || !formData.email || !formData.phone || !formData.classLevel || !formData.message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }
    
    // Show loading state
    sendBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    formMessage.style.display = 'none';
    
    try {
      // Send to backend
      const response = await fetch('http://localhost:3000/api/book-class', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        showMessage('Thank you! Your booking request has been sent. We will contact you soon.', 'success');
        bookingForm.reset();
      } else {
        showMessage(data.error || 'Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('Unable to send request. Please check your connection or try again later.', 'error');
    } finally {
      // Reset button state
      sendBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
    }
  });
}

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = 'block';
  
  // Scroll to message
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Auto-hide success messages after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }
}

/* ===== Pause timers when tab hidden ===== */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearTimeout(tTimer);
    clearTimeout(slideTimer);
  } else {
    type();
    resetTimer();
  }
});
