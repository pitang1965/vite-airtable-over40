import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  history.replace(appState?.returnTo || window.location.pathname);
};

ReactDOM.render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    audience={import.meta.env.VITE_AUTH0_AUDIENCE}
    // scope={import.meta.env.VITE_AUTH0_SCOPE}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
