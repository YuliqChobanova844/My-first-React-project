import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';



import Nav from 'react-bootstrap/Nav';




function MenuOverlay() {
 const {isAuthenticated, userEmail} = useContext(AuthContext);
  return (
    <div className="horizontal-menu" style={{ marginRight: '10px' }}>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" style={{ fontSize: '22px', padding: '10px 20px' }}>Начало</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/gallery" style={{ fontSize: '22px', padding: '10px 20px' }}>Галерия</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/prices" style={{ fontSize: '22px', padding: '10px 20px' }} >Цени</Nav.Link>
      </Nav.Item>
      {isAuthenticated && (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link eventKey="link-3" href="/vouchers" style={{ fontSize: '22px', padding: '10px 20px' }}>Ваучери</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-" href="/reserved/vouchers" style={{ fontSize: '22px', padding: '10px 20px' }}>Резервирани ваучери</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link eventKey="link-8" href="/logout" style={{ fontSize: '22px', padding: '10px 20px' }}>Logout</Nav.Link>
          </Nav.Item>
        </React.Fragment>
      )}
      {!isAuthenticated && (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link eventKey="link-5" href="/contacts" style={{ fontSize: '22px', padding: '10px 20px' }}>Контакти</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6" href="/login" style={{ fontSize: '22px', padding: '10px 20px' }}>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-7" href="/register" style={{ fontSize: '22px', padding: '10px 20px' }}>Register</Nav.Link>
          </Nav.Item>
        </React.Fragment>
      )}
    </Nav>
  </div>
  );
}

export default MenuOverlay;