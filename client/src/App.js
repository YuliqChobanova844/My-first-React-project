import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



import './App.scss';
import HeroSection from '../src/components/hero section/HeroSection';
import { Container } from 'react-bootstrap';
import {Header} from "../src/components/header/Header";
import MenuOverlay from './components/menu overlay/MenuOverlay';
import InformationSection from '../src/components/information section/InformationSection';
import ImagesCollection from '../src/components/image collection/ImagesCollection';
import PricesList from './components/prices list/PricesList';



import Footer from './components/footer/Footer';
import FooterSection from './components/footer section/FooterSection';
import Voucher from './components/voucher/Voucher';
import {useState} from 'react';


import '../src/components/contact form/ContactForm.scss'
import './components/footer/Footer.scss'
import '../src/components/prices list/PricesList.scss'






function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation()
  const isNotRoutePath = ['/gallery', '/contacts', '/vouchers'].indexOf(location.pathname) === -1;


  return (
   
    <div className="App">
     <Container>
      <Header navbarOpen = {navbarOpen} setNavbarOpen = {setNavbarOpen}/>
      
        <MenuOverlay navbarOpen = {navbarOpen} setNavbarOpen = {setNavbarOpen}/>
        {isNotRoutePath && (
          <>
            <HeroSection />
            <InformationSection />
          </>
        )}
        {location.pathname === '/gallery' && <ImagesCollection />}
        {location.pathname === '/contacts' && <FooterSection />}
        {location.pathname === '/vouchers' && <Voucher />}
        {location.pathname === '/prices' && <PricesList />}
        <Footer/>
      </Container>
    </div>
    
  );
}

export default App;
