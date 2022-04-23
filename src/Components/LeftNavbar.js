import React, { useState } from 'react';
import { Button, ButtonGroup, Image, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNavbar = ({show, handleClose}) => {

    return (
      <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
              <Offcanvas.Title className={'d-flex'}>
                  <Image roundedCircle className={'w-25'}
                         src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
                  <div className={'d-flex flex-column justify-content-center px-3'}>
                      <h3 className={'fs-5'}>Чайкин Ярослав</h3>
                      <p className={'fw-normal'} style={{fontSize: '12px', color: '#898989'}}>jaroslaw.chaykin@gmail.com</p>
                  </div>
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={'d-flex flex-column justify-content-between'}>
              <div className={'d-flex flex-column'}>
                  <Link onClick={handleClose} to={'/'} className={'p-3 border-bottom link-dark text-decoration-none'}>Галерея</Link>
                  <Link onClick={handleClose} to={'/image-holder/about'} className={'p-3 border-bottom link-dark' +
                    ' text-decoration-none'}>Обо мне</Link>
              </div>
              <div className="footer">
                  <ButtonGroup aria-label="Basic example">
                      <Button variant="primary">Github</Button>
                      <Button variant="primary">VK</Button>
                  </ButtonGroup>
              </div>
          </Offcanvas.Body>
      </Offcanvas>
    );
};

export default LeftNavbar;