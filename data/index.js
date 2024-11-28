// index.js
import { productos } from './producto'; // Asegúrate de que esta ruta sea correcta
import { getCardsData } from './cards';

export const generarContextoDePagina = (page) => {
  console.log('Página actual:', page);

  // Datos básicos genéricos para cualquier página
  const contextObject = {
    title: "Título genérico",
    description: "Descripción genérica para cualquier página.",
  };

  // Objeto de datos específicos por página
  let pageObject = {};
  switch (page) {
    case '/index.html':
      // Agrega los datos de las tarjetas a la página principal
      pageObject = {
        products: getCardsData(), // Si ya tienes esta función, la puedes dejar tal como está
      };
      break;

    case '/productos.html':  // Agrega la lógica para productos
      pageObject = {
        productos: productos, // Asumiendo que los productos están definidos en producto.js
      };
      break;

    default:
      // Contexto vacío o por defecto para otras páginas
      pageObject = {};
  }

  // Combina los contextos global y específico
  return {
    ...contextObject,
    ...pageObject,
  };
};
