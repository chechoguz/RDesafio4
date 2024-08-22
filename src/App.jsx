import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/pizza" />} /> 
          <Route path="/pizza" element={<Pizza />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
