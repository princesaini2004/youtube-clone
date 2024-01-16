
import './App.css';
import Header from './Compnan/Header'
import Allvideo from './Compnan/Allvideo'
import Javascript from './Compnan/Javascript'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Css from './Compnan/Css';
import Gaming from './Compnan/Gaming'
import Coding from './Compnan/Coding';
import Firstpage from './Compnan/Firstpage'
import Primiumpage from './Compnan/Primiumpage';

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Firstpage />} />
        <Route path='home' element={<Allvideo />} />
        <Route path='home' element={<Header />} />
        <Route path='head' element={<Allvideo />} />
        <Route path='head' element={<Header />} />
        <Route path='/css' element={<Css />}></Route>
        <Route path='/js' element={<Javascript />} />
        <Route path='/Coding' element={<Coding />}></Route>
        <Route path='/Game' element={<Gaming />}></Route>
        <Route path='/premiumpage' element={<Primiumpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
