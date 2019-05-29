import React, { Component } from 'react'
// import ReactDOM from 'react-dom'   
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Explore from './components/Explore/Explore'
import Register from './components/register/register'
import Navbar from './components/navbar/navbar'
import * as routes from './constants/routes'




class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar />
          <Switch>
              <Route exact path={routes.HOME} render={() =><Home /> } />
            <Route exact path={routes.REGISTER} render={()  =><Register /> } />
            <Route exact path={routes.LOGIN} render={()  =><Login /> } />
            <Route exact path={routes.EXPLORE} render={()  =><Explore />} />
          </Switch>

      </React.Fragment>
    )};
}


export default App;