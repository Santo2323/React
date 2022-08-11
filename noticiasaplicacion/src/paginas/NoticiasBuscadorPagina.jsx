import HeaderNoticias from "../components/HeaderNoticias";
import BuscadorNoticias from "../components/BuscadorNoticias";
import ListaNoticias from "../components/ListaNoticias";
import { Container } from "@mui/system";
import { useState } from "react";
import FooterNoticias from "../components/FooterNoticias";


const NoticiasBuscadorPagina = () => {
    const [busqueda, setBusqueda] = useState('');
    const onBuscar = (criterio) => {
        setBusqueda(criterio);
    }

    return (
    <div role='noticiasbuscadorpagina' >
        <HeaderNoticias/>
        <Container>
        <BuscadorNoticias onBuscar={onBuscar}/>
        <ListaNoticias busqueda ={busqueda}/>
        </Container>
        <FooterNoticias/>
    </div>
    );
};

export default NoticiasBuscadorPagina;