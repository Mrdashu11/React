import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Header from './header';
import './App.css';
import Kitchen from './Kitchen';
import Living from './Living';

import Decoration from './Decoration';

function App() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Kitchen />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/living' element={<Living />} />
          <Route path='/decoration' element={<Decoration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
