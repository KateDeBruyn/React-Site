import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import {Route, Switch} from 'react-router-dom';
// Ran into an use when trying to use Switch, so found a solution here:
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Theory from './pages/Theory';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App;

// oluwarotimi.randle@wits.ac.za
