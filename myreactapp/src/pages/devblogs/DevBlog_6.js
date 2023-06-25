import React, { Component } from 'react';
import '../../styles/Theory.css';
import PointButton from '../../components/PointsButton';
import ModernGreen from '../../assets/pics/modern_floral_green.png';

export default class DevBlog_6 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
render(){
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
        <h1 className='main-heading'>Dev Blog Six</h1>
            <section>
            <date className='section-title'>date...</date>
            <div class="video-container">
              <video controls class="video-responsive">
                <source src="" type="video/mp4" />
              </video>
            </div>
            <p className='paragraph'>
            Lorem Ipsum...
            React naming conventions: https://www.upbeatcode.com/react/react-naming-conventions/
            CSS naming conventions: https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/
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