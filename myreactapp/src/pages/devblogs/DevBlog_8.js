import React, { Component } from 'react'
import '../../styles/Theory.css'
import GreenRoses from '../../assets/shutterstock_185445815.jpg';

export default class DevBlog_8 extends Component {
render(){
    return (
      <div className='content' style={{backgroundImage: `url(${GreenRoses})`}}>
        <article className='foreground'>
        <h1 className='main-heading'>Dev Blog Eight</h1>
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