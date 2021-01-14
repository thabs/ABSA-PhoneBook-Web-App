import {createMuiTheme} from '@material-ui/core/styles';

// Light Theme
const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#69a8ff',
      main: '#1976D2',
      dark: '#115293'
    },
    secondary: {
      light: '#dc004e',
      main: '#9a0036',
      dark: '#115293'
    },
    background: {
      paper: '#fafafa',
      default: '#f5f5f5'
    }
  }
});

export default lightTheme;
