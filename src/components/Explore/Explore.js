import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Card, CardDeck, Row} from 'react-bootstrap'
import styled from 'styled-components'


const RowMargin = styled(Row) `
    margin-top: 20px;
    margin-bottom: 20px;

`

class Explore extends Component {
    render(){
        return (
            <Container>
                <h1>Just some stuff</h1>
            <CardDeck>
              <Row>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/851/300/300" />
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
              <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/852/300/300" />
              <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
              </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
              </Card>
              <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/853/300/300" />
              <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
              </Card>
              </Row>
              <RowMargin>
              <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/823/300/300" />
              <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
              </Card>
              <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/813/300/300" />
              <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
              </Card>
              <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/803/300/300" />
              <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
              </Card>
              </RowMargin>
            </CardDeck>
          </Container>
        )
    }
}

export default Explore;