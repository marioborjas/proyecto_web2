
// data/hero.js
export const getHeroData = () => {
    return {
      images: [
        { src: "/imagenes/hero/planta_de_trabajo.jpg" }, // Primera imagen
        { src: "/imagenes/hero/carga.jpg" }, // Segunda imagen 
        { src: "/imagenes/hero/seleccion.jpg" }, // Cuarta imagen
      ],
      title: "Bienvenidos a Macsa Group",
      subtitle: "La mejor calidad en mariscos",
      description: "Disfruta de productos frescos y sabrosos, perfectos para cualquier ocasión. Descubre nuestra variedad de productos y haz tu pedido hoy mismo.",
      buttonText: "Ver productos",
      buttonLink: "/productos.html"
    };
  };
  