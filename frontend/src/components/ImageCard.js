import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ImageCard = ({ image, deleteImage, saveImage }) => {
  const autherName = image.user?.name || 'No auther name';
  const autherPortfolio = image.user?.portfoilio_url;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{' '}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {autherPortfolio && (
          <Nav.Link href={autherPortfolio} targer="_blank">
            {autherName}
          </Nav.Link>
        )}
        {!autherPortfolio && autherName}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
