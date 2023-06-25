import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css'
import PointButton from '../../components/PointsButton';
import GreenRoses from '../../assets/shutterstock_185445815.jpg';
import Live2D from '../../assets/Live2D.png';
import ModernGreen from '../../assets/pics/modern_floral_green.png';

export default class DevBlog_2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
render(){

    const cubismUrl = 'https://docs.live2d.com/en/cubism-sdk-tutorials/sample-build-web/';

    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
        <h1 className='main-heading'>Dev Blog Two</h1>
            <section>
            <date className='section-title'>30/05/2023</date>
            <p className='paragraph'>
            I found that you can build web samples with the <Link to={cubismUrl} className='hyperlink'>Live 2D Cubism SDK for Web </Link> 
            which may be very helpful in showcasing my internet artwork. The only issue so far is that it is in TypeScript rather than JS.
            But it offers something similar to what I'm looking for, an interface where the vtuber character is following the cursor showing 
            how it is animated. 
            <img className="wireframes-img"
                src={Live2D}
                alt="A screenshot of the Cubism Index Page showing the Vtuber Model that can follow the cursor."
                />
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
