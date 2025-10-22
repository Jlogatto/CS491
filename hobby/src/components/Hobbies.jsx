import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { hobbiesData } from '../data/hobbiesData';

const Hobbies = ({ setCurrentPage, setSelectedHobby }) => (
  <Container className="mt-4">
    <h1 className="text-center mb-4">My Hobbies</h1>
    <Row>
      {hobbiesData.map((hobby) => (
        <Col md={6} lg={3} key={hobby.id} className="mb-4">
          <Card 
            className="h-100 shadow-sm" 
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelectedHobby(hobby);
              setCurrentPage('hobbyDetail');
            }}
          >
            <Card.Img variant="top" src={hobby.image} alt={hobby.title} />
            <Card.Body className="text-center">
              <Card.Title>{hobby.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Hobbies;