
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoticiasBuscadorPagina from './paginas/NoticiasBuscadorPagina'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Box } from '@mui/material';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="buscador" element={<NoticiasBuscadorPagina/>} />
            <Route path="*" element={<Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    minHeight="100vh"
                                    > <Alert severity="error">
                                      <AlertTitle>ERROR 404 NOT FOUND</AlertTitle>
                                      <strong>La pagina que usted buscaba no se encontró</strong>
                                      </Alert> </Box>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

