import { Container, Typography, Alert, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getPeliculas } from "../../servicios/noticias";
import Loading from "../Loading";
import Noticia from "../Noticia";
import Paginado from "../paginado";



const Noticias = ({noticias}) => {
    return(
        <section >
            {noticias && noticias.map((val, index) => 
                <a key={index} href={val.url} target="_blank">
                    <Noticia  {...val} />
                </a>
            )}
        </section>
    )
}

const ListaNoticias = ({busqueda} ) => {
    const [pagina, setPagina] = useState(1);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getNoticiasDesdeServicio = async (busqueda, pagina) => {
        setIsLoading(true);
        const respuesta = await getPeliculas(busqueda, pagina);
        setData(respuesta);
        setIsLoading(false);
    }

    useEffect(() =>{
        if(busqueda){
            getNoticiasDesdeServicio(busqueda, pagina);
        }
    }, [busqueda, pagina])    

    const onChangePaginacion = (_evento, pagina) => {
        setPagina(pagina);
    };
  
    if(isLoading) {
        return (
                <Loading/>
        );
    };

    if(data.totalResults===0) {
        return (
            <Box role='NoHayPeliculas'
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    paddingTop="25px"
                                    > <Alert severity="info"> No se encontraron resultados para su búsqueda</Alert>
                                    </Box>

        )
    };

    if(data.totalResults>0){
        const cantidadPaginas = Math.ceil(parseInt(data.totalResults)/10);
    return (
    <Container role='lista-peliculas'> 
        <Typography> Esta viendo 10 noticias de {data.totalResults} resultados</Typography>
        <Noticias noticias={data.articles}/>
        <Paginado page={pagina} count={cantidadPaginas} onChange={onChangePaginacion} />
    </Container>
    )
    }

};

export default ListaNoticias; 