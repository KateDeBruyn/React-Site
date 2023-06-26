import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css';
import PointButton from '../../components/PointsButton';
import ModernGreen from '../../assets/pics/modern_floral_green.png';
import Vlog_5 from '../../assets/vlogs/Vlog 5.mp4';

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
            <date className='section-title'>20/06/2023</date>
            <div class="video-container">
              <video controls class="video-responsive">
                <source src={Vlog_5} type="video/mp4" />
              </video>
            </div>
            <div className='button-position-page'>
            <PointButton />
            </div>
            </section>
        </article>    
      </div>
    )
    }
}