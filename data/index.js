export const generarContextoDePagina = (page) => {
    console.log("Página actual:", page);
  
    // Datos básicos genéricos para cualquier página
    return {
      title: "Título genérico",
      description: "Descripción genérica para cualquier página.",
      content: `Contenido dinámico generado para ${page}`,
    };
  };
  