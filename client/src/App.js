import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';
import { useNavigate } from 'react-router-dom';



import './App.scss';
import HeroSection from '../src/components/hero section/HeroSection';
import { Container } from 'react-bootstrap';
import {Header} from "../src/components/header/Header";
import MenuOverlay from './components/menu overlay/MenuOverlay';
import InformationSection from '../src/components/information section/InformationSection';
import ImagesCollection from '../src/components/image collection/ImagesCollection';
import PricesList from './components/prices list/PricesList';
import CreateVoucher from './components/create voucher/CreateVoucher'
import './components/create voucher/CreateVoucher.scss'
import  Login  from './components/login/Login';
import './components/login/Login.scss'
import RegistrationForm from './components/register/Register';
import './components/register/Register.scss'
import { Logout } from './components/logout/Logout';
import Voucher from './components/voucher/Voucher';
import VoucherDetails from './components/voucher details/VoucherDetails';



import Footer from './components/footer/Footer';
import FooterSection from './components/footer section/FooterSection';

import {useState} from 'react';


import '../src/components/contact form/ContactForm.scss'
import './components/footer/Footer.scss'

import '../src/components/prices list/PricesList.scss'







function App() {
  const [auth,setAuth] = useState({});
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
    setAuth(result);

    navigate('/')
    } catch (error) {
      return error;
    }
  };

   const onRegisterSubmit = async (values) => {
    const {confirmPassword, ...registerData} = values;
    if (confirmPassword !== registerData.password){
      return ;
      
      
    }
     try {
      const result = await authService.register(registerData);
    setAuth(result);

    navigate('/')
    } catch (error) {
      return error;
    }
};

const onLogout = async() => {
   await authService.logout()
   setAuth({});
   localStorage.clear()


};


  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId:auth._id,
    token:auth.accessToken,
    userEmail: auth.email,
    isAuthenticated:  !!auth.accessToken,
    
  }


  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation()
  const isNotRoutePath = ['/gallery', '/contacts', '/vouchers','/prices', '/login', '/register', '/logout', '/vouchers/:voucherId'].indexOf(location.pathname) === -1;


  return (
   
    <AuthContext.Provider value={context}>
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
        {location.pathname === '/reserved/vouchers' && <Voucher />}
        {location.pathname === '/vouchers/:voucherId' && <VoucherDetails />}
        {location.pathname === '/prices' && <PricesList />}
        {location.pathname === '/login' &&   <Login />}
        {location.pathname === '/register' && <RegistrationForm />}
        {location.pathname === '/logout' && <Logout />}
        <Footer/>
      </Container>
    </div>
    </AuthContext.Provider>
  );
}
export default App;
