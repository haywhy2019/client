import React from 'react'
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import Style from './Style.module.css'

 function Footer() {
    return (
        <div>
               <Container-fluid>
        <Row className="justify-content-center  pd-5 bg-light">
        <Col xs={12} sm={4} className="text-center">
        <h1 className="h6 ml-5 mt-5">We’re the first-ever on-demand laundry App in Lagos. We take care of your 
        laundry and dry cleaning with a push of a button from your phone or through our website.
         We strive to make cleaning your clothes a seamless experience and we will cater to your schedule,
          come straight to your door to pick up and deliver your laundry at affordable prices. 
          With exclusive partnership 
        with Shine Laundry, we guaranteed to provide the most professional service 
        that you can experience in Lagos</h1>
        </Col>
        <Col xs={12} sm={4} className="text-center">
        <h1>WHY CHOOSE US?</h1>
<h6>Reasonable price</h6>
<h6>Door Step Pick-up and Delivery</h6>
<h6>Easy to use App & Website</h6>
<h6>Time Saving</h6>
<h6>Professional Quality</h6>
<h6>Live Chat function to serve you better</h6>
        </Col>
        <Col xs={12} sm={4} className="justify-center">
        <h1>OUR PARTNERS</h1>
        <Image src="assets/logo1.png" className={Style.logoimg}/>
        <Image src="assets/logo2.png" className={Style.logoimg}/>
        <Image src="assets/logo3.png" className={Style.logoimg}/>
        </Col>
     </Row>
     </Container-fluid> 

        </div>
    )
}


export default Footer