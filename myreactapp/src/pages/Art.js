import React, { Component } from 'react';
import '../styles/Theory.css'
import GreenRoses from '../assets/shutterstock_185445815.jpg';


export default class Art extends Component {
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${GreenRoses})`}}>
        <article className='foreground'>
            <section>
            <h1 className='main-heading'>Artwork Placeholder</h1>
            </section>
        </article>    
      </div>
    )
  }
}