import React from 'react'
import '../components/Project.css'
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImage from '../assets/img/projectImage.jpg'

export const Projects = () => {

  return (
    <Container className='container' style={{ position: 'sticky', justifyContent: 'center', paddingTop: '250px', paddingBottom: '300px', alignItems: 'center', display: 'flex' }}>
      <Row>
        <Col>
          <div className='project-bx'>
            <h2> Project </h2>
            <Card style={{ width: '20rem', color: 'black' ,position:'center'}}>
              <Card.Img variant="top" style={{ height: '20rem' }} src={CardImage} />
              <Card.Body>
                <Card.Title>Qazi-TextUtils</Card.Title>
                <Card.Text>
                  This project provides users with the ability to transform their text in various ways, such as converting upper case text to lower case, and many other features have been added
                </Card.Text>
                <Link to="https://text-utils-qazi.web.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Click me to Check it</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
