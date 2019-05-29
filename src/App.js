import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Register from './components/Register/Register';
// import Login from './components/Login/Login';
import Register from './components/register/register';

const App = () => {
    return (
        <main>
            {/* <Switch> */}
                {/* <Route exact path="/login" component={ Login } /> */}
                {/* <Route exact path="/register" component={ Register } /> */}
                <Register />
            {/* </Switch> */}
        </main>
    )
}


export default App;