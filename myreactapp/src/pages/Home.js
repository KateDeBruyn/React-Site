import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageImg from '../assets/HD-wallpaper-rose-garden-garden-fantasy-rose-backdrop.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="home" style={{backgroundImage: `url(${HomepageImg})`}}>
        <div className='headerContainer'>
          <h1>The Rose Garden</h1>
          <p>Home of Keightyrose</p>
        </div>
      </div>
    )
  }
}
