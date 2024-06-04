import { createTheme } from '@mui/material/styles';

import '@fontsource/puppies-play';
import '@fontsource-variable/caveat';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#daa034',
    },
    secondary: {
      main: '#18171c',
    },
  },
  typography: {
    fontFamily: 'Caveat Variable',
    h1: {
        fontFamily: 'Puppies Play',
        color: '#daa034'
    },
    h2: {
        fontFamily: 'Puppies Play',
        color: '#daa034'
    }
  },
});