
import './less/hero.less';
import './less/header.less';

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


// Agregar interactividad para expandir/colapsar tarjetas
document.addEventListener("DOMContentLoaded", () => {
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Alterna la clase 'expanded' para mostrar/ocultar la respuesta
      card.classList.toggle("expanded");

      // Cambiar el ícono de expansión
      const toggleIcon = card.querySelector(".toggle-icon");
      if (card.classList.contains("expanded")) {
        toggleIcon.textContent = "−"; // Cambiar a un signo menos
      } else {
        toggleIcon.textContent = "+"; // Cambiar a un signo más
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    console.log("Botón y menú encontrados");

    toggle.addEventListener("click", () => {
      console.log("Botón clickeado");
      menu.classList.toggle("is-active");
      console.log("Clase is-active aplicada:", menu.classList.contains("is-active"));
    });
  } else {
    console.error("Error: Botón o menú no encontrados");
  }
});
