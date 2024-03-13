import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
