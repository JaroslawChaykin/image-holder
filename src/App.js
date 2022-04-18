import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Gallery from './Pages/Gallery';
import ImageShow from './Pages/ImageShow';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route exact path={'/'} element={<Gallery/>}/>
              <Route path={'/:id'} element={<ImageShow/>}/>
              <Route path={'*'} element={<Navigate to={'/'}/>}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
