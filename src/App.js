import React, { Component } from 'react';
import Register from './components/register/register'
import './App.css';


class App extends Component {

  componentDidMount (){
    this.getPhotos()
  }

  handleRegister = async (data) => {
    try {
      const registerCall = await fetch('http://localhost:8000/users/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
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
      const response = await fetch('http://localhost:8000/api/v1/photos', {
        credentials: 'include'
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
      </div>
    )
  }

  }

export default App;
