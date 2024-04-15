import React from 'react'
import './App.css';
import './components/responsive/responsive.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/index';
import Sobre from './components/pages/sobre/sobre';
import Fotos from './components/pages/fotos/fotos';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/sobre' element={<Sobre />} ></Route>
          <Route path='/fotos' element={<Fotos />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
    
);
}

export default App;
