import React, { Component } from 'react';
import "../styles/Home.css";
import HomepageImg from '../assets/HomePageImg.png';

export default class Home extends Component {
  render() {
    return (
      <div className="home" style={{backgroundImage: `url(${HomepageImg})`}}>
        <div className='headerContainer'>
          <h1>The Rose Garden</h1>
          {/*<iframe width={1280} height={720} src='../assets/CubismSdkForWeb-4-r.7/Samples/TypeScript/Demo/index.html'></iframe>*/}
        </div> 
      </div>
    )
  }
}
