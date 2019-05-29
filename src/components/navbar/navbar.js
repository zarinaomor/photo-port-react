import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () =>

        <Navbar bg="light" expand="lg">
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="">Explore</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="">Login/Register</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>




export default NavBar; 