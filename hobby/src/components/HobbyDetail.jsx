import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const HobbyDetail = ({ hobby, setCurrentPage, setSelectedHobby }) => {
  if (!hobby) {
    return (
      <Container className="mt-5 text-center">
        <h2>Hobby not found</h2>
        <Button 
          variant="primary" 
          className="mt-3"
          onClick={() => {
            setCurrentPage('hobbies');
            setSelectedHobby(null);
          }}
        >
          Back to Hobbies
        </Button>
      </Container>
    );
  }



  
  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Img variant="top" src={hobby.image} alt={hobby.title} />
        <Card.Body>
          <Card.Title as="h1">{hobby.title}</Card.Title>
          <Card.Text className="lead mb-3">{hobby.description}</Card.Text>
          <Card.Text>{hobby.details}</Card.Text>
          <Button 
            variant="primary" 
            className="mt-3"
            onClick={() => {
              setCurrentPage('hobbies');
              setSelectedHobby(null);
            }}
          >
            Back to Hobbies
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HobbyDetail;