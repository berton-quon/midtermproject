import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Cards() {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./Images', false, /\.(png|jpeg|svg)$/));
  


    return (
      <div class="card">
        <Card>
          <Card.Img variant="top" src={images['s1.png']}/>
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
