import React from 'react'
    import {Container, Row , Col , Button} from 'react-bootstrap'


    const HeroSection = () => {
        return (
         <Container className = 'hero-section-container'>
           <Row className = 'h-100'>
              <Col xs md = "8" className='d-flex flex-column justify-content-center text-start px-4'>
              <div className='mx-4'>
                <h1>Miroslav Chobanov Photography</h1>
                <p>
                Открийте света през обектива ми и 
                се потопете в богатството на моментите.Ние създаваме не просто снимки,
                 а истории - вълнуващи и вечни. Всяка фотография е пътешествие в емоциите, 
                които не можем да изразим с думи.{"  "}
                </p>
              </div>
              <div className='btns-wrapper px-4 d-flex align-items-center'>
                <a href="/">Read my blog</a>
                <Button variant = 'secondary'>Learn more</Button>

             </div>
              </Col>
              <Col xs md = "4">
                <div className='image-wrapper'></div>
              </Col>

           </Row>
         </Container>
        )
    }

    export default HeroSection