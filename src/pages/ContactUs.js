import React from 'react'
import { Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import style from './Style.module.css'



 function ContactUs() {
    return (
        <Container-fluid>
       <h1 className="text-center mt-5 mb-2 tpm ">Contact Us</h1>
        <Row className="align-content-around bg-light pb-5">
        <Col xs={12} sm={6} className="home"> 
     <h1 className="text-center mt-5 "> Call US</h1>
     <h2 className="text-center mt-2">0803465781, 07064959392</h2>
        </Col>
        <Col xs={12} sm={4} className="home">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="h4">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
      </Form> 
        </Col>
     </Row>
     </Container-fluid>
    )
}

export default ContactUs