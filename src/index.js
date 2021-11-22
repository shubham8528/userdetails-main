import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';




ReactDOM.render(
  <>
    
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root')
);


