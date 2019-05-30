import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
// import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css';


class NavBar extends Component{
    
    render(){
        const {handleShow} = this.props 
        return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navBar">
        <Nav>
            <Nav.Link>
                <Link to='/home'>
                <Nav.Item>
                    Home
                </Nav.Item>
                </Link>
            </Nav.Link>

            <Nav.Link>
            <Link to='/explore'>
                <Nav.Item>
                    Explore
                </Nav.Item>
            </Link>
            </Nav.Link>
        </Nav>

        <Nav >
            <Nav.Link>
                <Link>
                    <Nav.Item onClick={()=>{handleShow(1)}}>
                        Login
                    </Nav.Item>
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link>
                    <Nav.Item onClick={()=>{handleShow(2)}} >
                        Register
                    </Nav.Item>
                </Link>

            </Nav.Link>
            <Nav.Link>
                <Link>
                    <Nav.Item onClick={()=>{handleShow(3)}} >
                        Edit Profile
                    </Nav.Item>
                </Link>

            </Nav.Link>
            <Nav.Link>
                <Link>
                    <Nav.Item onClick={()=>{handleShow(4)}} >
                        Logout
                    </Nav.Item>
                </Link>

            </Nav.Link>
        </Nav>

        </Navbar>
    )}
}
export default NavBar

// {this.props.loggedUser._id ? <li><NavLink exact to="#" onClick={this.props.logoutUser}>