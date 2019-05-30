import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Login from '../Login/Login'
import Register from '../Register/register'


class Popup extends Component{
    render() {
        const {show,handleClose,modalID,checkedLogged} = this.props
        return (
          <>
            
    
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
                    <Modal.Body>{modalID===1?<Login login={checkedLogged} onHide={handleClose} />:<Register onHide={handleClose}/>}</Modal.Body>
              
            </Modal>
          </>
        );
      }
}

export default Popup;