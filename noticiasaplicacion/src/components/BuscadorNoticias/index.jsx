import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const BuscadorNoticias = (props) => {
  const [texto, setTexto] = useState('');

  const onTextoChange = (evento) =>{
    setTexto(evento.target.value);
  };

  const onBuscarClick = () => {
      if(texto.length > 3) {
        props.onBuscar(texto);
      }
  };

  const searchUserQuery = (e) => {
    if(texto.length > 3) {
      e.preventDefault();
      props.onBuscar(texto);
    }
  };


  if(texto.length < 4) {
    return (
      <form role='search'>
      <Stack
    marginTop="50px"
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >

        <TextField id="outlined-basic" label="Busqueda" variant="outlined" value={texto} onChange={onTextoChange}/>
        <Button variant="contained" onClick={onBuscarClick} disabled >Buscar</Button>
    </Stack>
    </form>
    );
};

  return (
    <form onSubmit={searchUserQuery} role = 'search'>
    <Stack
    marginTop="50px"
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >

        <TextField id="outlined-basic" label="Busqueda" variant="outlined" value={texto} onChange={onTextoChange}/>
        <Button variant="contained" onClick={onBuscarClick} >Buscar</Button>
    </Stack>
    </form>
  );
}


export default BuscadorNoticias

