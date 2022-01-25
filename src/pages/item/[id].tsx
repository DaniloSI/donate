import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import SliderImage from '@/components/SliderImage';
import { IItem } from '@/interfaces/item';
import api from '@/services/api';
import { Person, Place, WhatsApp } from '@mui/icons-material';
import { Box, Button, Grid, GridProps, Typography, Link } from '@mui/material';

type TextIconProps = {
  icon: React.ReactNode;
  text: string;
};

const TextIcon: React.FC<TextIconProps & GridProps> = ({ icon, text, ...rest }) => (
  <Grid container alignItems="flex-start" {...rest}>
    <Grid item>{icon}</Grid>
    <Grid item>
      <Typography variant="body1" ml="8px">
        {text}
      </Typography>
    </Grid>
  </Grid>
);

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<IItem>();

  useEffect(() => {
    if (id) {
      (async () => {
        const response = await api.get(`/items/${id}`);
        setItem(response.data);
      })();
    }
  }, [id]);

  const address = (() => {
    if (item) {
      const { bairro, municipio, uf } = item.user.address;
      return `${bairro}, ${municipio}, ${uf}`;
    }
    return '';
  })();

  return (
    <div>
      {item ? (
        <Box sx={{ display: 'flex' }}>
          <Box width="50%" pr="16px">
            <SliderImage images={[item.mainPhoto, ...item.photos]} />
          </Box>
          <Box width="50%" pl="16px">
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body1" my="32px">
              {item.description}
            </Typography>
            <Grid container columnSpacing={4} sx={{ mt: '32px' }}>
              <Grid item>
                <TextIcon icon={<Person fontSize="small" />} text={item.user.name} />
              </Grid>
              <Grid item>
                <TextIcon icon={<Place fontSize="small" />} text={address} />
              </Grid>
            </Grid>
            <Link href={`https://api.whatsapp.com/send?phone=55${item.user.phoneNumber}`} target="_blank" rel="noopener">
              <Button variant="outlined" startIcon={<WhatsApp />} size="large" sx={{ mt: '32px' }}>
                Enviar Mensagem
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Item;
