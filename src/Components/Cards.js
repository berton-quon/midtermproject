import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Cards({student}) {

  //importAll function provided by https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./Images', false, /\.(png|jpeg|svg)$/));

    return (
      <div class="card">

        <Card>
          <Card.Img src={images[student.image]} class='cardImage'/>
          <Card.Body>
            <Card.Title class='cardTitle'>{student.name}</Card.Title>
            <Card.Text class='cardGPA'>
              GPA: {student.gpa}
            </Card.Text>
            <Button>Grade</Button>
          </Card.Body>
        </Card>
    </div>
    )
  }
