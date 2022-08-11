import BuscadorNoticias from ".";
import {act, fireEvent, render, screen} from '@testing-library/react';


describe('<BuscadorNoticias/>', () => {
    
    it ('Debe aparecer un Loading cuando traigo las noticias', async () =>{

        render(<BuscadorNoticias/>);
        //Assert
        const buscadornoticias = screen.getByRole('search');
        expect(buscadornoticias).toBeInTheDocument();
    })

    it ('Debe llamar a props.onBuscar', async () =>{

        const onBuscarMock = jest.fn();

        render(<BuscadorNoticias onBuscar={onBuscarMock}/>);
        //Assert
        const buscadornoticias = screen.getByRole('search');
        const buscadorInput = buscadornoticias.querySelector('input');
        const botonBuscar = buscadornoticias.querySelector('button');

        act(()=> {
            fireEvent.change(buscadorInput, {target: {value: 'bitcoin'}});
            fireEvent.click(botonBuscar);
            expect(onBuscarMock).toHaveBeenCalled();
        })
    })

        it ('No debe llamar a props.onBuscar cuando la busqueda es menor a 3 caracteres', async () =>{

            const onBuscarMock = jest.fn();
    
            render(<BuscadorNoticias onBuscar={onBuscarMock}/>);
            //Assert
            const buscadornoticias = screen.getByRole('search');
            const buscadorInput = buscadornoticias.querySelector('input');
            const botonBuscar = buscadornoticias.querySelector('button');
    
            act(()=> {
                fireEvent.change(buscadorInput, {target: {value: 'a'}});
                fireEvent.click(botonBuscar);
                expect(onBuscarMock).not.toHaveBeenCalled();
            })
        })

        
})
