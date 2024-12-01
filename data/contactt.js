// data/contactt.js
export const getContactData = () => {
    return {
      title: "Contáctanos",
      description: "Estamos aquí para ayudarte. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.",
      images: [
        { src: "/imagenes/hero/seleccion.jpg", alt: "Imagen 1" },
        { src: "/imagenes/hero/planta_de_trabajo.jpg", alt: "Imagen 2" },
        { src: "/imagenes/hero/entrada.jpg", alt: "Imagen 3" },
      ],
      nameLabel: "Nombre:",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo Electrónico:",
      emailPlaceholder: "Tu correo electrónico",
      messageLabel: "Mensaje:",
      messagePlaceholder: "Escribe tu mensaje aquí",
      submitText: "Enviar"
    };
  };
  