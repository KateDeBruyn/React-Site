import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css';
import PointButton from '../../components/PointsButton';
import ModernGreen from '../../assets/pics/modern_floral_green.png';

export default class DevBlog_5 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
render(){
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
        <Link to='/devblogs' className='backHyperlink'>&lt; Back to blogs</Link>
        <h1 className='main-heading'>Dev Blog Five</h1>
            <section>
            <date className='section-title'>date...</date>
            <p className='paragraph'>
            Lorem Ipsum...
            </p>
            <div className='button-position-page'>
            <PointButton />
            </div>
            </section>
        </article>    
      </div>
    )
    }
}