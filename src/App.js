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
              <Route exact path={'/'} element={<Gallery/>}/>
              <Route path={'/:id'} element={<ImageShow/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'*'} element={<Navigate to={'/'}/>}/>
          </Routes>
          <LeftNavbar show={show} handleClose={handleClose}/>
      </BrowserRouter>
    );
}

export default App;
