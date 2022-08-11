import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';
import { DateTime } from 'luxon';

const Noticia = ({title, author, urlToImage, publishedAt}) => {
  

    const dia = DateTime.fromISO(publishedAt).toFormat('D');
    const hora = DateTime.fromISO(publishedAt).toFormat('t');
    return(
      <Card sx={{ margin: 4 }}>
        <CardActionArea sx={{display:'flex',
                            flexDirection: 'row-reverse',
                            justifyContent:'space-between',
                            }} >
          <CardMedia
            component="img"
            height="140"
            width="50"
            image={urlToImage}
            alt="News Image"
            sx={{maxWidth:'500px'
              }}
          />
          <CardContent sx={{maxWidth:'500px',
                            }}>
            <Typography gutterBottom variant="h6" component="div">
              {author}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Publicado el : {dia} a las {hora} hs
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  
    );

};

export default Noticia;