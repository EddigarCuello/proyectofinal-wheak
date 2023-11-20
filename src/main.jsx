import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';  // Cambia esta línea
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);  // Cambia esta línea
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
