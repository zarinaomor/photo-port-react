import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';


import Register from './components/register/register';
import Navbar from './components/navbar/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import * as routes from './constants/routes';

class App extends Component {

  componentDidMount (){
    this.getPhotos()
  }

  handleRegister = async (data) => {
    try {
      const registerCall = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      const response = await registerCall.json()
      console.log(response, 'from the flask server on localhost : 8000')

    } catch(err){
      console.log(err)
    }
  }
    
  getPhotos = async () => {
    
    try {
      const response = await fetch('http://localhost:8000/photos', {
        credentials: 'include',
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });

      if(response.ok){
        const responseParsed = await response.json();
        console.log(responseParsed)
      }

    } catch(err){
      console.log(err)
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={routes.REGISTER} render={()  => <Register handleRegister={this.handleRegister} />}/>

        </Switch>
      </div>
    )
  

  };
}

export default App;
