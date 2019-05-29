import React, { Component } from 'react';
import Register from './components/register/register'
import Login from './components/Login/Login'
import './App.css';


class App extends Component {

 

  
    
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
        <Register handleRegister={this.handleRegister} />
        <Login />
      </div>
    )
  }

  }

export default App;
