import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import {authServiceFactory} from './services/authService';
import { useNavigate } from 'react-router-dom';
import {voucherServicefactory} from './services/voucherService'



import './App.scss';
import HeroSection from '../src/components/hero section/HeroSection';
import { Container } from 'react-bootstrap';
import {Header} from "../src/components/header/Header";
import MenuOverlay from './components/menu overlay/MenuOverlay';

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
import './components/voucher details/VoucherDetails.scss'


import Footer from './components/footer/Footer';
import FooterSection from './components/footer section/FooterSection';

import {useEffect, useState} from 'react';


import '../src/components/contact form/ContactForm.scss'
import './components/footer/Footer.scss'
import '../src/components/prices list/PricesList.scss'




//Local storage for jwt 
function setAuth(auth) {
  localStorage.setItem('auth', JSON.stringify(auth));
}
function getAuth() {
  const stateStr = localStorage.getItem('auth');
  return stateStr ? JSON.parse(stateStr) : {};
}

function App() {
  const auth = getAuth();
  //const [auth, setAuth] = useState({});
  const navigate = useNavigate();
  const [vouchers,setVouchers] = useState([])
  const voucherService = voucherServicefactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);
  
  //Vouchers
  
  useEffect(() => {
    voucherService.getAll()
          .then(result => {
            setVouchers(result)
          });
   }, [])




const onCreateVoucherSubmit = async (data) => {
    try {
    const newVoucher = await voucherService.create(data);
    setVouchers(state => [...state, newVoucher])
    navigate('/reserved/vouchers')
    } catch (error) {
      console.log(error);
    }

};



//Authentication
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
  localStorage.clear();
};


  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId:auth._id,
    token:auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    
  }


  
 


  return (
   
    <AuthContext.Provider value={context}>
    <div className="App">
     
      <Header />
      
        <MenuOverlay />
        <HeroSection />
        <main id = "main-content">
         <Routes>   
        
        
        <Route path= '/gallery' element =  {<ImagesCollection />}/>
        <Route path= '/contacts' element =  {<FooterSection />}  />
        <Route path= '/vouchers' element = { <CreateVoucher onCreateVoucherSubmit={onCreateVoucherSubmit}/>} />
        <Route path= '/reserved/vouchers' element = { <Voucher  vouchers ={vouchers}/>} />
        <Route path= '/vouchers/:voucherId' element = { <VoucherDetails />} />
        <Route path= '/prices' element = {<PricesList />} />
        <Route path= '/login' element = {<Login />} />
        <Route path= '/register' element = { <RegistrationForm />} />
        <Route path= '/logout' element = { <Logout />} />
        </Routes>
        </main>
        <Footer/>
      </div>
    </AuthContext.Provider>
  );
}
export default App;
