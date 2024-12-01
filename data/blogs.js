export const getBlogData = () => {
    return {
        featuredPost: {
            title: "Empacadora de Camaron: Calidad y Compromiso",
            image: "/imagenes/logo.png",
            alt: "Empacadora del Mar",
            description: "La empacadora de mariscos 'Grupo MACSA' se ha destacado como una de las empresas líderes en la industria, ofreciendo productos de alta calidad y un fuerte compromiso con la sostenibilidad y el medio ambiente. Conoce cómo han logrado ser un referente en exportaciones internacionales.",
        },
        otherPosts: [
            {
                title: "Certificaciones de Calidad Internacional",
                description: "Conoce las normas y certificaciones que respaldan la calidad de sus productos.",
                certifications: [
                    { img: "/imagenes/blogs/fda.jpg", alt: "Certificación FDA" },
                    { img: "/imagenes/blogs/asc.jpg", alt: "Certificación ASC" },
                    { img: "/imagenes/blogs/haccp.jpg", alt: "Certificación HACCP" },
                ],
            },
            {
                title: "Procesos Ecológicos",
                description: "La empacadora utiliza procesos innovadores para minimizar el impacto ambiental.",
            },
            {
                title: "Beneficios para los Pescadores Locales",
                description: "Descubre cómo esta empresa apoya a las comunidades costeras.",
            },
        ],
    };
};
