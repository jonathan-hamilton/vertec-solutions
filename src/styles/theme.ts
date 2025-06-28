import { createTheme } from "@mui/material/styles";
import overrides from './overrides';
import './mui-theme-extensions';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#dcdcdc',
      paper: 'black',
    },
    text: {
      primary: '#ffffff',
      secondary: 'black',
    },
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
  components: overrides,
  custom: {
    principleCircle: 'green',
  },
});

export default theme;
