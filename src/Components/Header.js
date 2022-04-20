import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const Header = ({handleShow}) => {
    return (
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="#home">Чайкин Ярослав Александрович</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                  <Button variant="primary" onClick={handleShow}>
                      Меню
                  </Button>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    );
};

export default Header;