import React from 'react';
import {Carousel, Container, Row, Col, Button} from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <Row>
            <Col className="justify-content-center"><h1>Newest photo uploads</h1></Col>
            </Row>
            <Row>
            <Col xs={12} md={8}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/851/800/600"
                    alt="First slide"
                    />
                <Col xs={6} md={4}>
            <h6>Global network for photographers</h6>
            <span><h1>Upload, Share, Discover Photos</h1></span>
            <span><Button variant="outline-info" size="lg">Sign Up</Button></span>
            </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/1025/800/600"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/883/800/600"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Col>
            </Row>
        </Container>
    )
}

export default Home