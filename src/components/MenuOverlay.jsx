import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function MenuOverlay() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Начало">
        
      </Tab>
      <Tab eventKey="profile" title="Галерия">
        
      </Tab>
      <Tab eventKey="contact" title="Цени" disabled>
        
      </Tab>
      <Tab eventKey="home" title="Ваучери">
        
      </Tab>
      <Tab eventKey="home" title="Контакти">
        
      </Tab>
    </Tabs>
  );
}

export default MenuOverlay;