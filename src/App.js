import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Register from './pages/register';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}