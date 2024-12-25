import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <h1>Syrian Embassy</h1>
      <p>
        This is simple application that retrieves passport requests. In order to
        start enter any search term in the input
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Start
        </Button>
      </p>
    </Container>
  );
};

export default Welcome;
