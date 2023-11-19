
import './App.scss';
import HeroSection from '../src/components/HeroSection';
import { Container, Row, Col } from 'react-bootstrap';
import {Header} from "../src/components/Header";
import MenuOverlay from './components/MenuOverlay';
import InformationSection from './components/InformationSection';
import ImagesCollection from './components/ImagesCollection';
import ContactForm from './components/ContactForm';
import {useState} from 'react';





function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
     <Container>
      <Header navbarOpen = {navbarOpen} setNavbarOpen = {setNavbarOpen}/>
      
        <MenuOverlay navbarOpen = {navbarOpen} setNavbarOpen = {setNavbarOpen}/>
        
        <HeroSection/>
        <InformationSection/>
        <ImagesCollection/>
        <Container className = 'footer-section'>
          <Row>
          <div className=''>
          <img src = 'assets/icons/photographer_7902426' ></img>
          </div>
          </Row>
          <Row className = 'my-3'>
            <Col>
            <ContactForm/>
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
