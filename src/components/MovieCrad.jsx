import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IMG_URL } from '../hooks/GetEnv';
import BookmarkIcon from '@mui/icons-material/Bookmark';



export default function MovieCard({item}) {
    const [showImg, setShowImg] = React.useState(false)

  return (
    <Card className='p-3'  sx={{ maxWidth: 345 }}>
      <CardMedia
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}
        className='h-[250px] object-contain mb-5'
        component="img"
        height="194"
        image={`${IMG_URL}/${showImg ? item.poster_path : item.backdrop_path}`}
        alt="Paella dish"
      />
         <Typography className='line-clamp-1 font-semibold ' gutterBottom variant="h5" component="div">
            {item.title}
        </Typography>
      <CardContent>
        <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>
          {item.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
