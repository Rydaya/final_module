import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';

import './assets/scss/app.scss';

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
