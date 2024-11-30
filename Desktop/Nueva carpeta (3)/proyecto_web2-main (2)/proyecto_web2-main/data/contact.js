document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que la página se recargue
  
      // Capturar los valores ingresados por el usuario
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Crear un objeto para almacenar la información
      const contactData = {
        name,
        email,
        message,
        date: new Date().toLocaleString(), // Agrega la fecha y hora de envío
      };
  
      // Guardar en localStorage
      const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
      storedContacts.push(contactData);
      localStorage.setItem("contacts", JSON.stringify(storedContacts));
  
      // Mostrar un mensaje de éxito
      alert("¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto.");
  
      // Reiniciar el formulario
      form.reset();
    });
  });
  