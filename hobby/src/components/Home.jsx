import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => (
  <Container className="text-center mt-5">
    <h1 className="mb-4">Welcome Home!</h1>
    <p className="lead mb-4">My Hobbies</p>
    <img 
      src="https://picsum.photos/id/13/800/400" 
      alt="Welcome" 
      className="img-fluid rounded shadow"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </Container>
);



export default Home;