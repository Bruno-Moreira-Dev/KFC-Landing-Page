const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

i = 0;

function activeSlide(n) {
  for (slide of slides) {
    slide.classList.remove('active');
    slides[n].classList.add('active');
  }
}

// function for next btn
next.addEventListener('click', function() {
  if (i === slides.length - 1) {
    i = 0;
    activeSlide(i);
  } else {
    i++;
    activeSlide(i);
  }
});

// function for prev btn
prev.addEventListener('click', function() {
  if (i === 0) {
    i = slides.length - 1;
    activeSlide(i);
  } else {
    i--;
    activeSlide(i);
  }
});