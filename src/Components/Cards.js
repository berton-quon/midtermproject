import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Cards({cardInfo}) {
    return (
      <div class="card">
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
