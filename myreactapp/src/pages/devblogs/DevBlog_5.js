import React, { Component } from 'react'
import '../../styles/Theory.css'
import ModernGreen from '../../assets/pics/modern_floral_green.png';

export default class DevBlog_5 extends Component {
render(){
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
        <h1 className='main-heading'>Dev Blog Five</h1>
            <section>
            <date className='section-title'>date...</date>
            <p className='paragraph'>
            Lorem Ipsum...
            </p>
            </section>
        </article>    
      </div>
    )
    }
}