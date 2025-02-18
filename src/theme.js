import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    },
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
  },
});

export default theme
