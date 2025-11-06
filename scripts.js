// --------------- Hamburger Toggle ---------------
function toggleMenu(){
  const links = document.getElementById('nav-links');
  const burger = document.getElementById('hamburger');
  if(!links || !burger) return;
  links.classList.toggle('active');
  burger.classList.toggle('active');
}

// Close menu on link click (mobile UX)
document.addEventListener('click', (e)=>{
  const links = document.getElementById('nav-links');
  const burger = document.getElementById('hamburger');
  if(!links || !burger) return;
  if(e.target.closest('#nav-links a')){
    links.classList.remove('active');
    burger.classList.remove('active');
  }
});

// --------------- Typing Effect ---------------
const texts = [
  "Every Step Tells a Story",
  "Where Rhythm Meets Expression",
  "Dance That Speaks the Soul"
];
let tCount=0,tIndex=0,timer;
function type(){
  const el = document.getElementById('typing-text');
  if(!el) return;
  const word = texts[tCount % texts.length];
  el.textContent = word.slice(0, ++tIndex);
  if(tIndex === word.length){
    setTimeout(()=>{ tIndex=0; tCount++; type(); }, 1600);
  }else{
    clearTimeout(timer);
    timer = setTimeout(type, 120);
  }
}
document.addEventListener('DOMContentLoaded', type);

// --------------- Carousel ---------------
let slideIndex=0, slideTimer;
function showSlides(){
  const slides = document.getElementsByClassName("slide");
  if(!slides.length) return;
  for(let i=0;i<slides.length;i++){ slides[i].style.display="none"; }
  slideIndex = (slideIndex % slides.length) + 1;
  slides[slideIndex-1].style.display="block";
  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 3800);
}
document.addEventListener('DOMContentLoaded', showSlides);

// Pause timers when tab hidden
document.addEventListener('visibilitychange', ()=>{
  if(document.hidden){
    clearTimeout(timer); clearTimeout(slideTimer);
  }else{
    type(); showSlides();
  }
});

// --------------- 3D Tilt (Mouse + Touch) ---------------
function initTilt(){
  const tiltEls = document.querySelectorAll('.tilt, .card');
  tiltEls.forEach((card)=>{
    const strength = 14; // degrees

    function setTransform(x, y){
      const rect = card.getBoundingClientRect();
      const px = (x - rect.left) / rect.width;
      const py = (y - rect.top) / rect.height;
      const rotY = (px - 0.5) * 2 * strength; // left/right
      const rotX = (0.5 - py) * 2 * strength; // up/down
      card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`;
    }

    function reset(){
      card.style.transform = 'rotateX(0) rotateY(0)';
    }

    // Mouse
    card.addEventListener('mousemove', (e)=> setTransform(e.clientX, e.clientY));
    card.addEventListener('mouseenter', ()=> card.style.transition = 'transform 120ms ease');
    card.addEventListener('mouseleave', ()=> { card.style.transition='transform 280ms ease'; reset(); });

    // Touch (mobile) – tap pulse then reset
    card.addEventListener('touchstart', (e)=>{
      const t = e.touches[0];
      card.style.transition = 'transform 120ms ease';
      setTransform(t.clientX, t.clientY);
      // subtle pop
      card.animate([{ transform: card.style.transform + ' scale(1)' },{ transform: card.style.transform + ' scale(1.015)' },{ transform: card.style.transform + ' scale(1)' }],{ duration: 220, easing: 'ease-out' });
    }, {passive:true});

    card.addEventListener('touchmove', (e)=>{
      const t = e.touches[0];
      setTransform(t.clientX, t.clientY);
    }, {passive:true});

    card.addEventListener('touchend', ()=>{
      card.style.transition = 'transform 220ms ease';
      reset();
    });
  });
}
document.addEventListener('DOMContentLoaded', initTilt);

// --------------- Scroll Reveal ---------------
function initReveal(){
  const revealTargets = [
    ...document.querySelectorAll('section'),
    ...document.querySelectorAll('.card'),
    ...document.querySelectorAll('.Intro-carousel'),
    ...document.querySelectorAll('.Intro-text'),
  ];
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // once revealed, unobserve to avoid re-trigger
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach(el => io.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);

// --------------- Smooth anchor focus (a11y) ---------------
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', ()=> {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){ target.setAttribute('tabindex','-1'); target.focus({preventScroll:true}); }
  });
});
