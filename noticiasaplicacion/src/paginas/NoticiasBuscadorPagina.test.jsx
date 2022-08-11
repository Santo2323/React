import NoticiasBuscadorPagina from "./NoticiasBuscadorPagina";
import {render, screen} from "@testing-library/react";

describe('<NoticiasBuscadorPagina />', () => {
    it('Debe renderizarse', async() =>{

        render(<NoticiasBuscadorPagina/>);
        const noticiasbuscadorpagina = screen.getByRole('noticiasbuscadorpagina');
        expect(noticiasbuscadorpagina).toBeInTheDocument();
    })
})

