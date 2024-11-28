
import './less/hero.less';

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.hero-slide');
  let currentIndex = 0;

  // Función para mostrar la imagen siguiente
  function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  // Mostrar el siguiente slide cada 3 segundos
  setInterval(showNextSlide, 3000);

  // Inicialmente mostrar el primer slide
  slides[currentIndex].classList.add('active');
});
