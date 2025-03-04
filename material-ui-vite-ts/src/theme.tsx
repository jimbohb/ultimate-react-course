import { createTheme } from '@mui/material/styles';
import { themeOptions } from './themeoptions';

// A custom theme for this app
const bonomitheme = createTheme({
  cssVariables: true,
  palette:themeOptions.palette,
});

export default bonomitheme;
