import { createTheme } from '@mui/material/styles';
import overrides from './overrides';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#e91e63',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  components: overrides
});

export default theme;
