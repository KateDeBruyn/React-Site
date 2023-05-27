import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Ran into an use when trying to use Switch, so found a solution here:
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App"> 
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;
