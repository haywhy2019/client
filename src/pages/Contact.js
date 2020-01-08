import React from 'react'
import { Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import Style from'./Style.module.css';




 function Contact() {
    return (
      <div>
        <h1 className="text-center">CONTACT US</h1>
        <div className="mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.782411722258!2d3.3747852141500485!3d6.549134224683268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1b5899a8bd%3A0x8b88313d1d73d3b0!2sStutern!5e0!3m2!1sen!2sng!4v1577344652410!5m2!1sen!2sng"
         width="2000" height="450" frameborder="0"  allowfullscreen=""></iframe>
        </div>
        <Container className="bg-light">
            <Row className="">
           <Form className="mt-5 h5">
  <Form.Row>
  <Form.Group  controlId="formGridFirstName" className="">
      <Form.Label className="font1">First Name</Form.Label>
      <Form.Control type="text" placeholder="first name" />
    </Form.Group>

    <Form.Group  controlId="formGridPassword" className="ml-5">
      <Form.Label>Lastname</Form.Label>
      <Form.Control type="text" placeholder="last name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group  controlId="formGridPassword" className="ml-5">
      <Form.Label>Phone number</Form.Label>
      <Form.Control type="telephone" placeholder="" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Lagos Nigeria" />
  </Form.Group>
  <Button variant="primary " type="submit">
    Submit
  </Button>
</Form>
        
        </Row>
        </Container>
        </div>
    )
}

export default Contact