import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Gallery from './Pages/Gallery';
import ImageShow from './Pages/ImageShow';
import { Button, Container, Image, Navbar, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import About from './Pages/About';

function App() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <BrowserRouter>
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
          <Routes>
              <Route exact path={'/'} element={<Gallery/>}/>
              <Route path={'/:id'} element={<ImageShow/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'*'} element={<Navigate to={'/'}/>}/>
          </Routes>
          <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header>
                  <Offcanvas.Title className={'d-flex'}>
                      <Image roundedCircle className={'w-25'} src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
                      <div className={'d-flex flex-column align-items-center justify-content-center'} style={{paddingLeft: '20px'}}>
                          <h3 style={{fontSize: '20px'}}>Чайкин Ярослав</h3>
                          <p style={{fontSize: '12px', color: '#898989'}}>jaroslaw.chaykin@gmail.com</p>
                      </div>
                  </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={'d-flex flex-column '}>
                  <Link to={'/'} className={'p-lg-3 border-bottom link-dark text-decoration-none'}>Галерея</Link>
                  <Link to={'/About'} className={'p-lg-3 border-bottom link-dark text-decoration-none'}>Обо мне</Link>
              </Offcanvas.Body>
          </Offcanvas>
      </BrowserRouter>
    );
}

export default App;
