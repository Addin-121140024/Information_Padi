let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slides[currentSlide].style.display = 'block';
}

// Initialize the first slide to display
if (slides.length > 0) {
  slides[0].style.display = 'block';
}
