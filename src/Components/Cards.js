import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Cards extends Component {
  render() {
    return (
      <div className="containter">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>NAME HERE</Card.Title>
            <Card.Text>
              GPA HERE
            </Card.Text>
            <Button variant="primary">Grade</Button>
          </Card.Body>
        </Card>

    </div>
    )
  }
}

export default Cards