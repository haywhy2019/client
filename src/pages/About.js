import React from 'react'
import ContactUs from './ContactUs'
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import style from './Style.module.css'




function About() {
    return (
        <div>
        <Container >
            <h1 className="text-center mt-5">WHO ARE WE</h1>
<h3 className="text-center mt-5">We are team of delicated people who seek to revolutionise  Laundry business in Lagos by providing online web ordering service. With a touch of your finger we will provide door to door pickup and delivery service at your convenience. 
Saving your precious time to do what really matter to you.</h3>
            <h1 className="text-center mt-5">OUR AMAZING TEAM</h1>
            <Row className="show=grid text-center mb-5">
               <Col xs={12} sm={4} className={style.aboutimg}>

               <Image src="assets/team1.jpg" className={style.aboutimg}/>
               <h3>Sarah</h3>
               <p>Hi am Sarah CEO of LUNDAPP,Thank you for trusting us</p>
                   
                </Col>
                <Col xs={12} sm={4} className={style.aboutimg}>

               <Image src="assets/team2.jpg" className={style.aboutimg}/>
               <h3>Stones</h3>
               <p>Hi am Stones, Manager at LUNDAPP,Thank you for trusting us</p>
                   
                </Col>
                <Col xs={12} sm={4} className={style.aboutimg}>

               <Image src="assets/team3.jpg" className={style.aboutimg}/>
               <h3>Stan</h3>
               <p>Hi am Stan Head of Operations of LUNDAPP,Thank you for trusting us</p>
                   
                </Col>
               </Row>
             
        </Container>
        <br className="mt=5 tpm"/>
       <ContactUs className="mt-5"/>
   
        </div>
       
    )
}

export default About