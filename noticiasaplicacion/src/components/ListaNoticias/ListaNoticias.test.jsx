import ListaNoticias from ".";
import {render, screen, waitFor} from '@testing-library/react';
const NOTICIA_STUB = {"status":"ok","totalResults":1826,"articles":[{"source":{"id":null,"name":"Hipertextual"},"author":"Gabriel Erard","title":"Qué es Lightning Network y por qué es crucial para que Bitcoin sea el ‘dinero del futuro’","description":"Entre tantos conceptos ligados al Bitcoin, uno de los que más fuerza ha ganado en los últimos años es el de Lightning Network (LN). Se trata de una red de canales de pagos que permite transaccionar de un modo más veloz y con comisiones ínfimas o nulas, y los …","url":"https://hipertextual.com/2022/07/que-es-lightning-network-crucial-futuro-bitcoin","urlToImage":"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/02/kanchanara-4kjjezdyo3m-unsplash-scaled.jpeg?fit=2560%2C1707&quality=50&strip=all&ssl=1","publishedAt":"2022-07-15T00:01:00Z","content":"Entre tantos conceptos ligados al Bitcoin, uno de los que más fuerza ha ganado en los últimos años es el de Lightning Network (LN). Se trata de una red de canales de pagos que permite transaccionar d… [+7644 chars]"},{"source":{"id":null,"name":"Xataka.com"},"author":"Javier Pastor","title":"Ni Tesla se fía ya de bitcoin: la empresa vende el 75% de sus criptos para minimizar pérdidas","description":"A principios del año pasado la fiebre cripto contagiaba a Tesla. La empresa anunciaba una inversión de 1.500 millones de dólares en bitcoin. Poco después subía la apuesta y permitía que se pudieran comprar sus coches con esa criptomoneda.\n<!-- BREAK 1 -->\nAho…","url":"https://www.xataka.com/empresas-y-economia/tesla-se-fia-bitcoin-empresa-vende-75-sus-criptos-para-minimizar-perdidas","urlToImage":"https://i.blogs.es/ed08e0/captura-de-pantalla-2022-07-21-a-las-8.25.42/840_560.jpeg","publishedAt":"2022-07-21T06:27:18Z","content":"A principios del año pasado la fiebre cripto contagiaba a Tesla. La empresa anunciaba una inversión de 1.500 millones de dólares en bitcoin. Poco después subía la apuesta y permitía que se pudieran c… [+2174 chars]"},{"source":{"id":null,"name":"Genbeta.com"},"author":"Bárbara Bécares","title":"Musk comenzó a aceptar Bitcoin en Tesla en 2021. Ya ha vendido el 75% de esos Bitcoin, mientras pierden su valor","description":"Elon Musk, que es uno de los hombres más ricos del mundo, es reconocido por su capacidad para jugar con el valor de las criptomonedas. Tenemos los ejemplos de cómo un cambio de Elon Musk en su bio de Twitter añadiendo \"#bitcoin\" hizo que el precio del Bitcoin…","url":"https://www.genbeta.com/actualidad/musk-comenzo-a-aceptar-bitcoin-tesla-2021-ha-vendido-75-esos-bitcoin-pierden-su-valor","urlToImage":"https://i.blogs.es/d77460/1366_2000-1-/840_560.jpg","publishedAt":"2022-07-21T07:38:27Z","content":"Elon Musk, que es uno de los hombres más ricos del mundo, es reconocido por su capacidad para jugar con el valor de las criptomonedas. Tenemos los ejemplos de cómo un cambio de Elon Musk en su bio de… [+3171 chars]"},{"source":{"id":null,"name":"Xataka.com"},"author":"Javier Pastor","title":"Ethereum se prepara para su 'Merge' en septiembre, y eso parece haber devuelto algo de optimismo a la criptomoneda","description":"El segmento de las criptodivisas lleva meses de capa caída. De los máximos que se alcanzaron en noviembre hemos pasado a unas pérdidas de valor espectaculares que en muchos casos han llegado a ser de más del 65%. Ethereum ha sido una de las afectadas, pero ah…","url":"https://www.xataka.com/criptomonedas/ethereum-se-prepara-para-su-merge-septiembre-eso-parece-haber-devuelto-algo-optimismo-a-criptomoneda","urlToImage":"https://i.blogs.es/960337/captura-de-pantalla-2022-07-22-a-las-10.13.38/840_560.jpeg","publishedAt":"2022-07-22T09:01:15Z","content":"El segmento de las criptodivisas lleva meses de capa caída. De los máximos que se alcanzaron en noviembre hemos pasado a unas pérdidas de valor espectaculares que en muchos casos han llegado a ser de… [+3616 chars]"},{"source":{"id":null,"name":"Enriquedans.com"},"author":"Enrique Dans","title":"El bitcoin y la realidad","description":"Isabella Roiz, the The Washington Post, se puso en contacto conmigo por correo electrónico para hablar sobre la adopción de bitcoin como moneda oficial en El Salvador, y sobre las posibles consecuencias para su economía del hecho de adoptar una criptomoneda q…","url":"https://www.enriquedans.com/2022/07/el-bitcoin-y-la-realidad.html","urlToImage":"https://www.enriquedans.com/wp-content/uploads/2022/07/Bitcoin-El-Salvador-The-Washington-Post.jpg","publishedAt":"2022-07-07T08:34:06Z","content":"Isabella Roiz, the The Washington Post, se puso en contacto conmigo por correo electrónico para hablar sobre la adopción de bitcoin como moneda oficial en El Salvador, y sobre las posibles consecuenc… [+10581 chars]"},{"source":{"id":null,"name":"Hipertextual"},"author":"Ara Rodríguez","title":"En mitad del invierno, Bit2Me lanza su pasarela de pagos para criptomonedas","description":"En pleno invierno de las criptos, Bit2Me sigue lanzando productos que hagan crecer el ecosistema. En este caso, se adentran en el sector de las pasarelas de pago con criptomonedas. Una para de su negocio para empresas que, en última instancia, revierte en el …","url":"https://hipertextual.com/2022/07/pasarela-de-pagos-cripto-bit2me-invierno-cripto","urlToImage":"https://imgs.hipertextual.com/wp-content/uploads/2022/04/criptomonedas.jpg","publishedAt":"2022-07-13T08:40:24Z","content":"En pleno invierno de las criptos, Bit2Me sigue lanzando productos que hagan crecer el ecosistema. En este caso, se adentran en el sector de las pasarelas de pago con criptomonedas. Una para de su neg… [+4370 chars]"},{"source":{"id":null,"name":"Genbeta.com"},"author":"Bárbara Bécares","title":"Mientras Putin prohíbe el pago con bitcoin en Rusia, las grandes fortunas se resguardan en el cripto: lanzan su primer token digital","description":"Desde que Rusia invadiese Ucrania, y comenzase así una guerra en Ucrania, los países de la OTAN y empresas con sede en estos países, han impuesto sanciones y bloqueos económicos a Moscú. Por ejemplo, en marzo, los países de la OTAN bloquearon el acceso de los…","url":"https://www.genbeta.com/actualidad/putin-prohibe-pago-bitcoin-rusia-grandes-fortunas-se-resguardan-cripto-lanzan-su-primer-token-digital","urlToImage":"https://i.blogs.es/8b8b27/mohd-azrin-hrstwaqu7cu-unsplash/840_560.jpg","publishedAt":"2022-07-19T07:52:53Z","content":"Desde que Rusia invadiese Ucrania, y comenzase así una guerra en Ucrania, los países de la OTAN y empresas con sede en estos países, han impuesto sanciones y bloqueos económicos a Moscú. Por ejemplo,… [+6035 chars]"},{"source":{"id":null,"name":"Genbeta.com"},"author":"Bárbara Bécares","title":"La historia de la pionera demanda notificada a través de un NFT: El anonimato del blockchain ya no vale para estafar criptomonedas","description":"En Gran Bretaña ya se puede utilizar el blockchain para demandar a alguien en una decisión pionera a nivel mundial. Un juez del Reino Unido dio el visto bueno para notificar una demanda a una persona a través de un token no fungible o NFT, según se puede ver …","url":"https://www.genbeta.com/actualidad/historia-pionera-demanda-notificada-a-traves-nft-anonimato-blockchain-no-vale-para-estafar-criptomonedas","urlToImage":"https://i.blogs.es/787a6d/conny-schneider-3hkkv6wzjce-unsplash/840_560.jpg","publishedAt":"2022-07-22T09:48:46Z","content":"En Gran Bretaña ya se puede utilizar el blockchain para demandar a alguien en una decisión pionera a nivel mundial. Un juez del Reino Unido dio el visto bueno para notificar una demanda a una persona… [+2331 chars]"},{"source":{"id":null,"name":"Applesfera.com"},"author":"Eduardo Archanco","title":"El precio del iPhone 14 podría no subir (tanto) como pensábamos. Dale las gracias al Bitcoin","description":"Con la cantidad de mareas económicas que estamos viviendo en los últimos tiempos, era inevitable que los precios de los productos de Apple se vieran afectados. Para peor. Si bien la semana pasada veíamos malas noticias para el precio del iPhone 14 vía tipo de…","url":"https://www.applesfera.com/iphone/precio-iphone-14-podria-no-subir-como-pensabamos-dale-gracias-al-bitcoin","urlToImage":"https://i.blogs.es/b66d37/photo-1537589376225-5405c60a5bd8/840_560.jpeg","publishedAt":"2022-07-19T11:51:16Z","content":"Con la cantidad de mareas económicas que estamos viviendo en los últimos tiempos, era inevitable que los precios de los productos de Apple se vieran afectados. Para peor. Si bien la semana pasada veí… [+2078 chars]"},{"source":{"id":null,"name":"Hipertextual"},"author":"Gabriel Erard","title":"Rusia también quiere regular las criptomonedas, en medio de una ‘criptomanía’","description":"Rusia no le escapa a la tendencia de regular las criptomonedas y ya las tiene en el punto de mira. Según Reuters, el servicio federal a cargo del monitorio financiero en el país, Rosfinmonitoring, quiere profundizar el rastreo de las transacciones con criptom…","url":"https://hipertextual.com/2022/07/rusia-regular-criptomonedas-criptomania","urlToImage":"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/07/putin.png?fit=3040%2C2026&quality=50&strip=all&ssl=1","publishedAt":"2022-07-08T19:19:00Z","content":"Rusia no le escapa a la tendencia de regular las criptomonedas y ya las tiene en el punto de mira. Según Reuters, el servicio federal a cargo del monitorio financiero en el país, Rosfinmonitoring, qu… [+3823 chars]"}]};
const stubFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(NOTICIA_STUB)
});
const NOHAYPELICULAS_STUB = {"status":"ok","totalResults":0,"articles":[]};


describe('<ListaNoticias />', () =>{
    
    let originalFetch


    afterEach(() =>{
        global.fetch = originalFetch;
    })

    // Loading
    it ('Debe aparecer un Loading cuando traigo las noticias', async () =>{
        // Act
        render(<ListaNoticias busqueda='bitcoin' />);
        //Assert
        const loading = screen.getByRole('progressbar');
        expect(loading).toBeInTheDocument();
    })


    it ('Deben aparecer las peliculas', async () =>{

        const stubFetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(NOTICIA_STUB)
        });

        const originalFetch = global.fetch;
        global.fetch = stubFetch;

        render(<ListaNoticias busqueda='bitcoin' />);
        //Assert
 
        await waitFor(()=> {
            expect(screen.getByRole('lista-peliculas')).toBeInTheDocument();
        })
    })

    it ('no Deben aparecer las peliculas', async () =>{

        const stubFetchNoHayPeliculas = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(NOHAYPELICULAS_STUB)
        });

        const originalFetch = global.fetch;
        global.fetch = stubFetchNoHayPeliculas;

        render(<ListaNoticias busqueda = 'sssssss'/>);
        //Assert

        await waitFor(()=> {
            expect(screen.getByRole('NoHayPeliculas')).toBeInTheDocument();
        })
    })

});