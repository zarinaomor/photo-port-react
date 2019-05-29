import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Explore from './components/Explore/Explore'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'

import * as routes from './constants/routes';




class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path={routes.REGISTER} render={()  =><Register /> } />
          <Route exact path={routes.LOGIN} render={()  =><Login /> } />
          <Route exact path={routes.EXPLORE} render={()  =><Explore />} />
        </Switch>


      </div>
    )};
}

export default App;