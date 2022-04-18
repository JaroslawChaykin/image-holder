import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const ImageItem = ({image}) => {
    const navigate = useNavigate()
    return (
      <Card style={{ width: '18rem', margin: '20px 0'}}>
          <Card.Img variant="top" src={image.thumbnailUrl} />
          <Card.Body>
              <Card.Text>
                  {image.title}
              </Card.Text>
              <Button variant="primary" onClick={() => navigate(`/${image.id}`)}>Перейти</Button>
          </Card.Body>
      </Card>
    );
};

export default ImageItem;