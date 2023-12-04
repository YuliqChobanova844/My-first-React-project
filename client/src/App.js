import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.scss';
import HeroSection from '../src/components/HeroSection';
import { Container, Row, Col } from 'react-bootstrap';
import {Header} from "../src/components/Header";
import MenuOverlay from './components/MenuOverlay';
import InformationSection from './components/InformationSection';
import ImagesCollection from './components/ImagesCollection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FooterSection from './components/FooterSection';
import Voucher from './components/Voucher';
import {useState} from 'react';
import './components/ContactForm.scss'
import './components/Footer.scss'






function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Router>
    <div className="App">
     <Container>
      <Header navbarOpen = {navbarOpen} setNavbarOpen = {setNavbarOpen}/>
      
        <MenuOverlay navbarOpen = {navbarOpen} setNavbarOpen = {setNavbarOpen}/>
        <HeroSection/>
        <InformationSection/>
        <Routes>
        <Route path="/gallery" element={<ImagesCollection/>} />
        <Route path="/contacts" element={<FooterSection/>} />
        <Route path="/vouchers" element={<Voucher/>} />
        </Routes>
        <Footer/>
      </Container>
    </div>
    </Router>
  );
}

export default App;
