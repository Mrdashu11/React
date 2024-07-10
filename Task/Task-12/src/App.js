import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './header';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <>
     
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
          <Route path="/section4" element={<Section4 />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
