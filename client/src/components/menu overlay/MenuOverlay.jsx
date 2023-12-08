import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';



import Nav from 'react-bootstrap/Nav';




function MenuOverlay() {
 const {isAuthenticated, userEmail} = useContext(AuthContext);

  return (
    <div className="horizontal-menu">
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Начало</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/gallery">Галерия</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/prices">Цени</Nav.Link>
      </Nav.Item>
      {isAuthenticated && (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link eventKey="link-3" href="/vouchers">Ваучери</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-" href="/reserved/vouchers">Резервирани ваучери</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link eventKey="link-8" href="/logout">Logout</Nav.Link>
          </Nav.Item>
        </React.Fragment>
      )}
      {!isAuthenticated && (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link eventKey="link-5" href="/contacts">Контакти</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6" href="/login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-7" href="/register">Register</Nav.Link>
          </Nav.Item>
        </React.Fragment>
      )}
    </Nav>
  </div>
  );
}

export default MenuOverlay;