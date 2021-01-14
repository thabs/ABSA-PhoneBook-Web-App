import React, {useContext} from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
// @material-core ThemeProvider
import {ThemeProvider} from '@material-ui/core/styles';
//! Theme Context
import {ThemeContext} from 'theme/ThemeContext';
// core components
import Home from 'containers/Home';

//! Providers
import {ContactsProvider} from 'features/contacts';

const hist = createBrowserHistory();

const App = () => {
  //! Theme Context
  const {theme} = useContext(ThemeContext);

  return (
    <ContactsProvider>
      <ThemeProvider theme={theme}>
        <Router history={hist}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ContactsProvider>
  );
};

export default App;
