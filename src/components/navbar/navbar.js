import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

<<<<<<< HEAD

// import 'bootstrap/dist/css/bootstrap.css';
=======
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
>>>>>>> master

class NavBar extends Component{
    
    render(){
        const {handleShow} = this.props 
        return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navBar">
        <Nav>
            <Nav.Link>
                <Link to='/home'>
                <Nav.Item>
<<<<<<< HEAD
                    <Nav.Link>Home</Nav.Link>
=======
                    Home
>>>>>>> master
                </Nav.Item>
                </Link>
            </Nav.Link>

            <Nav.Link>
            <Link to='/explore'>
                <Nav.Item>
                    Explore
                </Nav.Item>
<<<<<<< HEAD
                
            <Nav.Item>
                <Nav.Link href="" onClick={()=>{handleShow(1)}} >Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="" onClick={()=>{handleShow(2)}}>Register</Nav.Link>
            </Nav.Item>
=======
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
>>>>>>> master
        </Nav>

        </Navbar>
    )}
}
export default NavBar