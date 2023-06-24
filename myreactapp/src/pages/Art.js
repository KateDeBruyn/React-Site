import React, { Component } from 'react';
import '../styles/Theory.css'

import ModernGreen from '../assets/pics/modern_floral_green.png';


export default class Art extends Component {
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
            <section>
            <h1 className='main-heading'>Artwork Placeholder</h1>
            </section>
        </article>    
      </div>
    )
  }
}