import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from 'react-modal-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';

// import store from './redux/Store';
// import App from './App';
// import routes from './routes';
// import { initializeRestClient } from './rest';

import { version } from '../package.json';

import '@fontsource/roboto';
import { CssBaseline } from '@material-ui/core';
import { StyledEngineProvider } from '@material-ui/styled-engine';
import ThemeProviderWhitTheme from './theme/ThemeProviderWhitTheme';
import './index.css';
import Login from './Login/Login';

// theme
/**
 * Features toggles: allow the integrate features in the code before they're
 * finished and ready to release
 */
Sentry.init({
  dsn: 'https://8a70625927e34ca8be25f9b8bea9a771@sentry.io/170564',
  release: version,
  environment: process.env.NODE_ENV,
});

// initializeRestClient(store);

/*
 * Redirect from shopmanager -> devicemanager
 */
ReactDOM.render(
  // <Provider store={store}>
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <ThemeProviderWhitTheme>
      <BrowserRouter>
        <Login />
        {/* <App store={store}>
            <Switch>
              {routes.map(({ path, render }, index) => (
                <Route
                  exact
                  path={path}
                  render={render}
                  key={index.toString()}
                />
              ))}
            </Switch>
          </App> */}
      </BrowserRouter>
    </ThemeProviderWhitTheme>
    <ModalContainer />
  </StyledEngineProvider>,
  // </Provider>
  document.getElementById('root')
);
