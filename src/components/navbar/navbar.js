import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () =>

        <Navbar bg="light" expand="lg">
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/explore">Explore</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>




export default NavBar; 