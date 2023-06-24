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
import Essay from './pages/Essay';
import Design from './pages/Design';
import Rationale from './pages/Rationale';
import Art from './pages/Art';

import DevBlogs from './pages/DevBlogs';
import DevBlog_1 from './pages/devblogs/DevBlog_1';
import DevBlog_2 from './pages/devblogs/DevBlog_2';
import DevBlog_3 from './pages/devblogs/DevBlog_3';
import DevBlog_4 from './pages/devblogs/DevBlog_4';
import DevBlog_5 from './pages/devblogs/DevBlog_5';
import DevBlog_6 from './pages/devblogs/DevBlog_6';

import { PointsProvider } from './helpers/PointsContext';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      
      <PointsProvider>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/internetArt' element={<Art/>}/>
        <Route exact path='/rationale' element={<Rationale/>}/>
        <Route exact path='/menu' element={<Menu/>}/>

        <Route exact path='/devblogs' element={<DevBlogs/>}/>
        <Route exact path='/devblogone' element={<DevBlog_1/>}/>
        <Route exact path='/devblogtwo' element={<DevBlog_2/>}/>
        <Route exact path='/devblogthree' element={<DevBlog_3/>}/>
        <Route exact path='/devblogfour' element={<DevBlog_4/>}/>
        <Route exact path='/devblogfive' element={<DevBlog_5/>}/>
        <Route exact path='/devblogsix' element={<DevBlog_6/>}/>

        <Route exact path='/essay' element={<Essay/>}/>
        <Route exact path='/design' element={<Design/>}/>
      </Routes>
      </PointsProvider>
      
      <Footer/>
    </div>
  )
}

export default App;

// oluwarotimi.randle@wits.ac.za
