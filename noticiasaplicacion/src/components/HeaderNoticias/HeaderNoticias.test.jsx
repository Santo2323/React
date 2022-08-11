import HeaderNoticias from ".";
import {render, screen} from '@testing-library/react';

describe('<HeaderNoticias />', () => {
    it('Debe aparecer en el documento', async() =>{
        render(<HeaderNoticias/>);
        const headernoticias = screen.getByRole('headernoticias');
        expect(headernoticias).toBeInTheDocument();
    })
})
