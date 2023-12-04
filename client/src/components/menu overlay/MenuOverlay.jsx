import { Link } from '@mui/material';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';




function MenuOverlay() {
 

  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Начало</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href = "/gallery">Галерия</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href = "/prices">Цени</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" href = "/vouchers">Ваучери</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" href = "/contacts">Контакти</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default MenuOverlay;