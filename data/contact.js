document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue

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

  // Carrusel
const carouselImages = document.querySelector(".carousel-images");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
let currentIndex = 0;
let interval;

// Botón de anterior
prevBtn.addEventListener("click", () => {
  clearInterval(interval); // Reinicia el temporizador al interactuar
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.children.length - 1;
  updateCarousel();
  startAutoSlide(); // Vuelve a iniciar el auto-slide
});

// Botón de siguiente
nextBtn.addEventListener("click", () => {
  clearInterval(interval); // Reinicia el temporizador al interactuar
  currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
  startAutoSlide(); // Vuelve a iniciar el auto-slide
});

// Actualizar carrusel
function updateCarousel() {
  const offset = -currentIndex * 100; // Desplazar en porcentaje
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Auto-slide cada 3 segundos
function startAutoSlide() {
  interval = setInterval(() => {
    currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 3000); // Cambia cada 3000ms = 3 segundos
}

// Iniciar auto-slide
startAutoSlide();

});
