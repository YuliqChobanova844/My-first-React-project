import React from 'react'
import ContactForm from './ContactForm'
import {Container, Row , Col , } from 'react-bootstrap'

function FooterSection() {
    return (
<Container className = 'footer-section'>
          <Row>
          <div className=''>
          <img src={require('../assets/images/photographer logo_7902426.png')} width="700" height="670" alt="cam"/>
          </div>
          </Row>
          <Row className = 'my-3'>
            <Col>
            <ContactForm/>
            </Col>

          </Row>
        </Container>
    );
}
export default FooterSection