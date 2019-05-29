import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';

import Register from './components/register/register'
import Navbar from './components/navbar/navbar'

import Register from './components/Register/Register';


const App = () => {
    return (
        <main>

            {/* <Switch> */}
            <Navbar />
                {/* <Route exact path="/login" component={ Login } /> */}
                < Register  />
            {/* </Switch> */}

        </main>
    )
}


export default App;