import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Login from '../Login/Login'
import Register from '../register/register'
import AddPhoto from '../AddPhoto/AddPhoto';
import EditUserInfo from '../EditUserInfo/EditUserInfo'


class Popup extends Component{
    render() {
        const {show,handleClose,modalID,checkedLogged,userID} = this.props
        return (
          <>
            
    
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
                    <Modal.Body>
                        {modalID === 1
                        ?<Login logged={checkedLogged} onHide={handleClose} />:
                        (modalID === 2 
                        ? <Register onHide={handleClose}/>:
                        (modalID === 3
                        ? <AddPhoto userID={userID}/>:<EditUserInfo userID={userID}/> )    )
                        }
                    </Modal.Body>
              
            </Modal>
          </>
        );
      }
}

export default Popup;