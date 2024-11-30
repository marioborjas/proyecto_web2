// index.js
import { productos } from './producto'; // Asegúrate de que esta ruta sea correcta
import { getCardsData } from './cards';
import { getHeroData } from './hero';
import { getContactData } from './contactt'; // Importar los datos de contacto
import { getAboutData } from './aboutt'; // Importar los datos de "Acerca de"
import { events } from './eventos';
import { getFaqData } from './faq.js';
import { getGalleryData } from './galeria.js';
import { getBlogData } from './blogs.js';

// Genera el contexto de la página según la ruta
export const generarContextoDePagina = (page) => {
  console.log('Página actual:', page);

  // Datos básicos genéricos para cualquier página
  const contextObject = {
    title: "Título genérico",
    description: "Descripción genérica para cualquier página.",
  };

  // Objeto de datos específicos por páginas
  let pageObject = {};
  switch (page) {
    case '/index.html':
      // Agrega los datos del Hero y las tarjetas para la página principal
      pageObject = {
        ...getHeroData(),
        products: getCardsData(), // Los productos que ya tienes
      };
      break;

    case '/productos.html':  // Agrega la lógica para productos
      pageObject = {
        productos: productos, // Asumiendo que los productos están definidos en producto.js
      };
      break;

    case '/contact.html':  // Agrega los datos de contacto
      pageObject = {
        ...getContactData(), // Los datos del formulario de contacto
      };
      break;

    case '/acercadenosotros.html':  // Agrega los datos de la sección "Acerca de"
      pageObject = {
        ...getAboutData(), // Los datos de "Acerca de Nosotros"
      };
      break;

      case '/eventos.html':  // Agrega los datos de la sección "eventos"
      pageObject = {
        events, // Los eventos importados
      };
      break;

      case '/faq.html':  // Agrega los datos de la sección "eventos"
      pageObject = {
        ...getFaqData(), // Los eventos importados
      };
      break;

      case '/galeria.html':  // Agrega los datos de la sección "eventos"
      pageObject = {
        ...getGalleryData(), // Los eventos importados
      };
      break;
      
      case '/blogs.html':  // Agrega los datos de la sección "eventos"
      pageObject = {
        ...getBlogData(), // Los eventos importados
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
