import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useState} from 'react';



import './App.scss';
import HeroSection from '../src/components/hero section/HeroSection';
import { Container } from 'react-bootstrap';
import {Header} from "../src/components/header/Header";
import MenuOverlay from './components/menu overlay/MenuOverlay';
import InformationSection from '../src/components/information section/InformationSection';
import ImagesCollection from '../src/components/image collection/ImagesCollection';
import PricesList from './components/prices list/PricesList';
import './components/prices list/PricesList.scss'
import CreateVoucher from './components/create voucher/CreateVoucher';
import './components/create voucher/CreateVoucher.scss'
import  Login  from './components/login/Login';
import './components/login/Login.scss'
import { AuthContext } from './contexts/AuthContext';



import Footer from './components/footer/Footer';
import FooterSection from './components/footer section/FooterSection';
import Voucher from './components/voucher/Voucher';



import '../src/components/contact form/ContactForm.scss'
import './components/footer/Footer.scss'








function App() {
  const [auth,setAuth] = useState({});

  const onLoginSubmit = async (data) => {
    
    console.log(data);
  }




  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation()
  const isNotRoutePath = ['/gallery', '/contacts', '/vouchers', '/prices', '/login'].indexOf(location.pathname) === -1;


  return (
   <AuthContext.Provider value={{onLoginSubmit}}>
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
        {location.pathname === '/vouchers' && <CreateVoucher />}
        {location.pathname === '/prices' && <PricesList />}
        {location.pathname === '/login' && (
  <>
    <Login />
    
  </>
)}
        <Footer/>
      </Container>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
