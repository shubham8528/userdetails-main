import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Switch } from 'react-router';
import Services from './Services';
import './App.css';
import Contact from './Contect';
import Home from './Home';

import Costumerdetails from './Costumerdetails';
import Login from './Login';
import LoadingAnimation from './Loading/LoadingAnimation';
// import { useState } from 'react';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/constumerdetails' component={Costumerdetails} />
        <Route path='/loading' component={LoadingAnimation} />
      </Switch>
    </>
  );
}

export default App;
