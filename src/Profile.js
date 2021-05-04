import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Profile extends Component {
  render() {
    console.log(this.props);
    // `this.props.auth0` has all the same properties as the `useAuth0` hook
    const { user } = this.props.auth0;
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.picture} alt={user.name} />
              <Card.Body>
                <Card.Title>Hello {user.name}</Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withAuth0(Profile);