import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import UserPage from './pages/UserPage/UserPage.jsx';

import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';

import './services/firebaseService.js';

import './assets/scss/app.scss';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/userPage' element={<UserPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
