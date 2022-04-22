import {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Gallery, About, ImageShow} from './Pages'
import LeftNavbar from './Components/LeftNavbar';
import Header from './Components/Header';

function App() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <BrowserRouter>
          <Header handleShow={handleShow}/>
          <Routes>
              <Route path={'/image-holder/'} element={<Gallery/>}/>
              <Route path={'/image-holder/images/:id'} element={<ImageShow/>}/>
              <Route path={'/image-holder/about'} element={<About/>}/>
              <Route path={'*'} element={<Navigate to={'/image-holder/'}/>}/>
          </Routes>
          <LeftNavbar show={show} handleClose={handleClose}/>
      </BrowserRouter>
    );
}

export default App;
