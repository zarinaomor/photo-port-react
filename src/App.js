import React, { Component } from 'react';
import Register from './components/register/register'
import './App.css';

class App extends Component {
  
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
