import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev--ezju6ia.us.auth0.com"
      clientId="myyXdYeC6wKIN3lgYLQu0GUBVWH2rCF1"
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')

);
