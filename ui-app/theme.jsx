import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D459E1', // Primary color
    },
    secondary: {
      main: '#fcf2fd', // Secondary color
    },
    icon: '#eeeeee',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  spacing: 4, // Default spacing unit (4px)
});
