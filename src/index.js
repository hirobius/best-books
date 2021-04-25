import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

// TODO: wrap everything in Auth0
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-i0x6xv7c.us.auth0.com"
      clientId="RHo5IuNHi63xPEM3BH7OL22242Kz2GYk"
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')

);
