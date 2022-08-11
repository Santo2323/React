import { API_KEY, NEWS_API_HOST } from "./constantes";

export const getPeliculas = async (criterioBusqueda = '', pagina = 1) => {
    try {
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=1&pageSize=10&language=es     
        const respuesta = await fetch(`${NEWS_API_HOST}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${pagina}&pageSize=10&language=es`);
        return respuesta.json();
    } catch (error) {
        console.log(error);
        return { isError: true };
    }
};
