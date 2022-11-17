import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.scss';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/test-zikmes/`}>
      <AppProvider>
        <App/>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);


