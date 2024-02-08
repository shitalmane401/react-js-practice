import React from 'react'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Carousel/> */}
      <Main />
      <Footer />
    </div>
  )
}
