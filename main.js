import './less/hero.less';
import './less/header.less';

document.addEventListener("DOMContentLoaded", () => {

  const heroSlides = document.querySelectorAll('.hero-slide');
  let heroCurrentIndex = 0; 

  if (heroSlides.length > 0) {
   
    function showNextHeroSlide() {
      heroSlides[heroCurrentIndex].classList.remove('active');
      heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length;
      heroSlides[heroCurrentIndex].classList.add('active');
    }

   
    setInterval(showNextHeroSlide, 3000);

   
    heroSlides[heroCurrentIndex].classList.add('active');
  } else {
    console.warn('No se encontraron elementos .hero-slide');
  }

  // FAQ Cards Interactivity
  const faqCards = document.querySelectorAll(".faq-card");

  if (faqCards.length > 0) {
    faqCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("expanded");

        // Cambiar el ícono de expansión
        const toggleIcon = card.querySelector(".toggle-icon");
        if (toggleIcon) {
          toggleIcon.textContent = card.classList.contains("expanded") ? "−" : "+";
        }
      });
    });
  }

  // Navigation Menu
  const toggle = document.getElementById("nav-toggle");
  const menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("is-active");
    });
  } else {
    console.warn("Botón o menú no encontrados en el DOM");
  }

  // Contact Form
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const contactData = { name, email, message, date: new Date().toLocaleString() };
      const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
      storedContacts.push(contactData);
      localStorage.setItem("contacts", JSON.stringify(storedContacts));

      alert("¡Tu mensaje ha sido enviado con éxito!");
      form.reset();
    });
  } else {
    console.warn("No se encontró el formulario de contacto en el DOM");
  }

  // Carousel
  const carouselImages = document.querySelector(".carousel-images");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let carouselCurrentIndex = 0; 
  let interval;

  if (carouselImages && prevBtn && nextBtn) {
    // Botón de anterior
    prevBtn.addEventListener("click", () => {
      clearInterval(interval);
      carouselCurrentIndex = (carouselCurrentIndex > 0) ? carouselCurrentIndex - 1 : carouselImages.children.length - 1;
      updateCarousel();
      startAutoSlide();
    });

    // Botón de siguiente
    nextBtn.addEventListener("click", () => {
      clearInterval(interval);
      carouselCurrentIndex = (carouselCurrentIndex < carouselImages.children.length - 1) ? carouselCurrentIndex + 1 : 0;
      updateCarousel();
      startAutoSlide();
    });


    function updateCarousel() {
      const offset = -carouselCurrentIndex * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
    }

   
    function startAutoSlide() {
      interval = setInterval(() => {
        carouselCurrentIndex = (carouselCurrentIndex < carouselImages.children.length - 1) ? carouselCurrentIndex + 1 : 0;
        updateCarousel();
      }, 3000);
    }

  
    startAutoSlide();
  } else {
    console.warn("Carrusel o botones del carrusel no encontrados en el DOM");
  }
});


//factura
window.onload = function() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (carrito.length === 0) {
      document.getElementById('productos-lista').innerHTML = '<p>No has agregado productos al carrito.</p>';
      return;
  }

  function actualizarFactura() {
      let subtotal = 0;
      let productosHTML = '';

      carrito.forEach((producto, index) => {
          productosHTML += `
              <div class="producto">
                  <p>${producto.nombre} -  ${producto.precio}</p>
                  <button class="eliminar-btn" data-index="${index}">Eliminar</button>
              </div>
          `;
          subtotal += parseFloat(producto.precio.replace('Lps.', '').trim());
      });

      document.getElementById('productos-lista').innerHTML = productosHTML;

      let impuesto = subtotal * 0.15;

      let total = subtotal + impuesto;

      document.getElementById('subtotal').textContent = `L ${subtotal.toFixed(2)}`;
      document.getElementById('impuesto').textContent = `L ${impuesto.toFixed(2)}`;
      document.getElementById('total').textContent = `L ${total.toFixed(2)}`;
  }

  actualizarFactura();

  document.getElementById('productos-lista').addEventListener('click', function(event) {
      if (event.target && event.target.classList.contains('eliminar-btn')) {
          let index = event.target.getAttribute('data-index');

          carrito.splice(index, 1);

          localStorage.setItem('carrito', JSON.stringify(carrito));

          actualizarFactura();
      }
  });

  document.getElementById('pagarBtn').addEventListener('click', function() {
      localStorage.removeItem('carrito');

      document.getElementById('productos-lista').innerHTML = '<p>No has agregado productos al carrito.</p>';
      document.getElementById('subtotal').textContent = 'L 0.00';
      document.getElementById('impuesto').textContent = 'L 0.00';
      document.getElementById('total').textContent = 'L 0.00';

      document.getElementById('mensajePago').style.display = 'block'; 

      setTimeout(function() {
          document.getElementById('mensajePago').style.display = 'none'; 

          window.location.reload(); 
      }, 3000);
  });
};
