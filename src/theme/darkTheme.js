import {createMuiTheme} from '@material-ui/core/styles';

// Dark theme
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
      light: '#a6d4fa',
      dark: '#648dae'
    },
    secondary: {
      main: '#f48fb1',
      light: '#f6a5c0',
      dark: '#aa647b'
    },
    background: {
      paper: '#303030',
      default: '#424242'
    }
  }
});

export default darkTheme;
