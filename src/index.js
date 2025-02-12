import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteConfig from './routeConfig.js';
import reportWebVitals from './reportWebVitals';
import "./App.css";
import AOS from "aos";
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
AOS.init();


const root = createRoot(document.getElementById("root"))

root.render(<HelmetProvider>
  <RouteConfig />
</HelmetProvider>)

window.process = {
  env: {}
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
