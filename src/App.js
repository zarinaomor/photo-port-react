import React, { Component } from 'react'
// import ReactDOM from 'react-dom'   
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Explore from './components/Explore/Explore'
import Register from './components/Register/register'
import Navbar from './components/navbar/navbar'
import Popup from './components/Modal/modal'
import Profile from './components/Profile/Profile'
import * as routes from './constants/routes'
import Home from './components/Home/Home'




class App extends Component{
  state = {
    show: false,
    modalID: 0,
    logged: false,
    userID: null
  }
  checkedLogged= (userID)=>{
    this.setState({
      logged:true,
      userID:userID
    })
  }

  handleClose = ()=> {
    this.setState({ show: false });
  }

  handleShow = (num)=> {
    this.setState({ show: true ,modalID: num});
  }
  render(){
    return (
      <React.Fragment>
        <Navbar handleShow = {this.handleShow}/>
          <Switch>
            <Route exact path={routes.HOME} render={() =><Home creator={this.state.userID}/> } />
            <Route exact path={routes.REGISTER} render={()  =><Register /> } />
            <Route exact path={routes.LOGIN} render={()  =><Login /> } />
            <Route exact path={routes.EXPLORE} render={()  =><Explore />} />
            <Route exact path={`${routes.PROFILE}/:id`} render={()  =><Profile userID={this.state.userID} logged={this.state.logged}/>} />
          </Switch>
        < Popup  handleClose= {this.handleClose} checkedLogged={this.checkedLogged} modalID = {this.state.modalID} show = {this.state.show} />
      </React.Fragment>
    )};
}


export default App;