import React from 'react';

import { LocationOn } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';

type Props = {
  linkImage: string;
  title: string;
  shortDescription: string;
  address: string;
};

const Item: React.FC<Props> = ({ linkImage, title, shortDescription, address }) => {
  return (
    <Card sx={{ maxWidth: 256, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" height="256" image={linkImage} alt="Item" />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box component="article">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </Box>
        <Box component="address" sx={{ mt: 4 }}>
          <LocationOn fontSize="small" /> {address}
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Mais detalhes
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
