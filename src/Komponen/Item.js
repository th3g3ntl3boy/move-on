import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = (props) => {
  return (
    <div>
        <Card style={{ width: '18rem', height: '23rem' }}>
            <Button variant="light" style={{ backgroundColor: "transparent"}} >
                <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <hr></hr>
                <Card.Subtitle className="mb-2 text-muted">
                    <Button variant="light" size="sm">
                        {props.category}
                    </Button>
                </Card.Subtitle>
                <Card.Text>
                    {props.text}
                </Card.Text>
                </Card.Body>
            </Button>
        </Card>
       
    </div>
  )
}

export default Item;