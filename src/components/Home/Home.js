import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
            <Col xs={6} md={4}>
            <h6>Global network for photographers</h6>
            <span><h1>Upload, Share, Discover Photos</h1></span>
            <span><Button variant="outline-info" size="lg">Sign Up</Button></span>
            </Col>
            </Row>
        </Container>
    )
}

export default Home