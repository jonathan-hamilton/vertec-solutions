import { Components } from '@mui/material/styles';

const overrides: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    defaultProps: {
      disableElevation: true,
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: '2rem 1rem',
      },
    },
  },
};

export default overrides;
