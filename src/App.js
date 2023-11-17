
import './App.scss';
import HeroSection from '../src/components/HeroSection';
import { Container } from 'react-bootstrap';
import {Header} from "../src/components/Header";
import MenuOverlay from './components/MenuOverlay';
import InformationSection from './components/InformationSection';
import ImagesCollection from './components/ImagesCollection';
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
      </Container>
    </div>
  );
}

export default App;
