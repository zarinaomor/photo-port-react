import React, {Component} from 'react';
import {Carousel, Container, Row, Col, Button} from 'react-bootstrap'
import styled from 'styled-components'
import AddPhoto from '../AddPhoto/AddPhoto';

const BackgroundContainer = styled(Carousel.Item) `
    background-image: url("../images/bkg1.svg");
`


class Home extends Component {
    render(){
    const {creator} = this.props
    console.log(creator)
    return (
        <Container>
            <Row>
            <Col className="justify-content-center"><h1>Newest photo uploads</h1></Col>
            </Row>
            <Row>
            <Col>
            <Carousel>
                <BackgroundContainer>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/851/800/600"
                    alt="First slide"
                    />
                <Col>
            <h6>Global network for photographers</h6>
            <h1>Upload Photos</h1>
            <Button variant="outline-info" size="lg">Sign Up</Button>
            </Col>
                </BackgroundContainer>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/1025/800/600"
                    alt="First slide"
                    />
                     <Col>
                    <h6>Global network for photographers</h6>
                    <h1>Share Photos</h1><Button variant="outline-info" size="lg">Sign Up</Button>
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/883/800/600"
                    alt="First slide"
                    />
                     <Col>
                    <h6>Global network for photographers</h6>
                    <h1>Discover Photos</h1>
                    <Button variant="outline-info" size="lg">Sign Up</Button>
                    </Col>
                </Carousel.Item>
            </Carousel>
            </Col>
            </Row>
            < AddPhoto userID={creator}/>
        </Container>
    )};
}

export default Home