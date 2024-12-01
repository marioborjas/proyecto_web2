
import { productos } from './producto'; 
import { getCardsData } from './cards';
import { getHeroData } from './hero';
import { getContactData } from './contactt'; 
import { getAboutData } from './aboutt'; 
import { events } from './eventos';
import { getFaqData } from './faq.js';
import { getGalleryData } from './galeria.js';
import { getBlogData } from './blogs.js';
import { getnuestroprogramaData } from './nuestroprograma.js';


export const generarContextoDePagina = (page) => {
  console.log('Página actual:', page);

  // Datos básicos genéricos para cualquier página
  const contextObject = {
    title: "Título genérico",
    description: "Descripción genérica para cualquier página.",
  };

  
  let pageObject = {};
  switch (page) {
    case '/index.html':
      
      pageObject = {
        ...getHeroData(),
        products: getCardsData(), 
      };
      break;

    case '/productos.html':  
      pageObject = {
        productos: productos, 
      };
      break;

    case '/contact.html':  
      pageObject = {
        ...getContactData(), 
      };
      break;

    case '/acercadenosotros.html':  
      pageObject = {
        ...getAboutData(), 
      };
      break;

      case '/eventos.html':  
      pageObject = {
        events, 
      };
      break;

      case '/faq.html':  
      pageObject = {
        ...getFaqData(), 
      };
      break;

      case '/galeria.html':  
      pageObject = {
        ...getGalleryData(), 
      };
      break;

      case '/nuestroprograma.html':  
      pageObject = {
        ...getnuestroprogramaData(), 
      };
      break;
      
      case '/blogs.html':  
      pageObject = {
        ...getBlogData(), 
      };
      break;
    default:
      
      pageObject = {};
  }

  
  return {
    ...contextObject,
    ...pageObject,
  };
};
