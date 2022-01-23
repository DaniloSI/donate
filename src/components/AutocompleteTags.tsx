import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const top100Films = [
  { title: 'Guarda-roupa' },
  { title: 'Prancha de surf' },
  { title: 'Patins' },
  { title: 'Skate' },
  { title: 'Roupa' },
  { title: 'Chinelo' },
  { title: 'Agasalho' },
  { title: 'Bike' },
  { title: 'Bicicleta' },
  { title: 'Barco' },
  { title: 'Móveis' },
];

export default function AutocompleteTags() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      options={[...options].sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Palavras-chave" />}
    />
  );
}
