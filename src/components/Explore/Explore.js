import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Card, CardDeck} from 'react-bootstrap'


class Explore extends Component {
    render(){
        return (
            <Container>
                <h1>Just some stuff</h1>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/851/100/100" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}

export default Explore;