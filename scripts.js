/* ===== Hamburger ===== */
const burger = document.getElementById('hamburger');
const menu = document.getElementById('nav-links');

function toggleMenu(){
  const open = menu.classList.toggle('open');
  burger.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
}
burger.addEventListener('click', toggleMenu);

// Close on link click (mobile)
document.querySelectorAll('#nav-links a').forEach(a=>{
  a.addEventListener('click', ()=> {
    menu.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded','false');
  });
});

/* ===== Typing Effect ===== */
const phrases = [
  'Every Step Tells a Story',
  'Where Rhythm Meets Expression',
  'Dance That Speaks the Soul'
];
let p=0, i=0, tTimer;
function type(){
  const el = document.getElementById('typing-text');
  if(!el) return;
  const word = phrases[p % phrases.length];
  el.textContent = word.slice(0, ++i);
  if(i === word.length){
    setTimeout(()=>{ i=0; p++; type(); }, 1400);
  }else{
    clearTimeout(tTimer);
    tTimer = setTimeout(type, 110);
  }
}
document.addEventListener('DOMContentLoaded', type);

/* ===== Carousel ===== */
let slideIdx = -1, slideTimer;
function showSlides(){
  const slides = document.querySelectorAll('.slide');
  if(!slides.length) return;
  slides.forEach(s => s.style.display = 'none');
  slideIdx = (slideIdx + 1) % slides.length;
  slides[slideIdx].style.display = 'block';
  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 3600);
}
document.addEventListener('DOMContentLoaded', showSlides);

/* ===== Scroll Reveal ===== */
function revealOnScroll(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 120){
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* Pause timers when tab hidden */
document.addEventListener('visibilitychange', ()=>{
  if(document.hidden){ clearTimeout(tTimer); clearTimeout(slideTimer); }
  else { type(); showSlides(); }
});
