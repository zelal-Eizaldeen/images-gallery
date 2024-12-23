import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
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
  </Jumbotron>
);

export default Welcome;
