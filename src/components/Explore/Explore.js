import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Card, CardDeck, Row} from 'react-bootstrap'
import styled from 'styled-components'


const RowMargin = styled(Row) `
    margin-top: 20px;
    margin-bottom: 20px;

`

class Explore extends Component {

  getPhotos = async () => {
    try {


    } catch (err) {
      console.log(err)
      return err
    }
  }

    render(){
        return (
           <div></div>
        )
    }
}

export default Explore;