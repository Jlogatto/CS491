import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const About = () => (
  <Container className="mt-5">
    <Card className="shadow">
      <Card.Body>
        <h1 className="mb-4">About Me</h1>
        <Row>
          <Col md={4} className="text-center mb-3">
            <img 
              src="https://picsum.photos/seed/profile/300/300" 
              alt="Profile" 
              className="img-fluid rounded-circle shadow"
            />
          </Col>
          <Col md={8}>
            <h3>Hello! I'm Joseph</h3>
            <p className="mt-3">
              I am a senior at Pace University pursuing a degree in Computer Science.        
              This website has some of my hobbies.
                
            </p>
            <p>
              <strong>Location:</strong> Staten Island, NY<br />
              <strong>Email:</strong> jl29972n@pace.edu<br />
              <strong>Interests:</strong> Movies/TV, Video Games, Archery, Cooking
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
);

export default About;