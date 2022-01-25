import React from 'react';

import Link from 'next/link';

import { IListItem } from '@/interfaces/item';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';

type Props = {
  item: IListItem;
};

const Item: React.FC<Props> = ({ item }) => {
  const { id, mainPhoto, title, shortDescription, address } = item;
  return (
    <Card sx={{ maxWidth: 256, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" height="200" image={mainPhoto} alt="Item" />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box component="article">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </Box>
        <Box component="address" sx={{ mt: 2 }}>
          <Typography variant="body2">{address.bairro}</Typography>
          <Typography variant="body2">{`${address.municipio} - ${address.uf}`}</Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Link href={`/item/${id}`} passHref>
          <Button size="small" color="primary">
            Mais detalhes
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
