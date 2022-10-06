import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';

import Home from './pages/routePages/Home.jsx';
import Cart from './pages/routePages/Cart.jsx';

import './scss/app.scss';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
