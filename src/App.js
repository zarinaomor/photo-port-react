import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/login" component={ Login } />
                <Route exact path="/register" component={ Register } />
            </Switch>
        </main>
    )
}


export default Login;