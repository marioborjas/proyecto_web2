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
        products: getCardsData(), // Asegúrate de que `getCardsData` devuelve los productos
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

  