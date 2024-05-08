import './App.css';
import React from 'react';
import Navbar from './components/navbar'
import Intro from './components/introduction'
import Features from './components/features'
import Slide from './components/slide'
import Price from './components/Price'
import Footer from './components/footer'
import Question from './components/questions';

function App() {
  return (
    <>
      <Navbar/>
      <Slide/>
      <Intro/>
      <Features/>
      <Price/>
      <Question/>
      <Footer/>
    </>
  );
}

export default App;
