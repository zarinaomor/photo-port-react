import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Login from '../Login/Login'
import Register from '../Register/register'


class Popup extends Component{
    render() {
        const {show,handleClose,modalID} = this.props
        return (
          <>
            
    
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
                    <Modal.Body>{modalID===1?<Login />:<Register />}</Modal.Body>
              
            </Modal>
          </>
        );
      }
}

export default Popup;