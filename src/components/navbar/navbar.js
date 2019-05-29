import React ,{ Component} from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component{
    
    render(){
        const {handleShow} = this.props 
        return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="justify-content-center">
            <LinkContainer to='/home'>
                <Nav.Item>
                    <Nav.Link >Home</Nav.Link>
                </Nav.Item>
            </LinkContainer>
            
            <LinkContainer to='/home'>
                <Nav.Item>
                    <Link to='/explore'><Nav.Link>Explore</Nav.Link></Link>
                </Nav.Item>
            </LinkContainer>
            <Nav.Item>
                <Nav.Link href="" onClick={()=>{handleShow(1)}} >Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="" onClick={()=>{handleShow(2)}}>Register</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>
    )}
}
export default NavBar