import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css';
import PointButton from '../../components/PointsButton';
import ModernGreen from '../../assets/pics/modern_floral_green.png';
import Vlog_6 from '../../assets/vlogs/Vlog 6.mp4';

export default class DevBlog_6 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
render(){
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
        <Link to='/devblogs' className='backHyperlink'>&lt; Back to blogs</Link>
        <h1 className='main-heading'>Dev Blog Six</h1>
            <section>
            <date className='section-title'>25/06/2023</date>
            <p className='paragraph'>
            The last few things that weren't added to this vlog were my final touches in CSS. For the life of me, I could 
            not get some of the pages responsive design TO RESPOND. Like this page, the "content" would just not budge. The 
            "foreground" would not change either, and none of the other class names seemed to do the trick. Same with the alignment of 
            the headings and paragraphs. You'll see in the css that the margin are the same yet they still do not align. I'm sure if I hacked 
            away at it for a day I may come across a solution, but time is precious and so are my other exams, so it's an unfortunate 
            mark to lose but a sacrifice I have to make. I hope you enjoyed going through the site though! It was tough, but lot's of fun 
            to make!
            </p>
            <div class="video-container">
              <video controls class="video-responsive">
                <source src={Vlog_6} type="video/mp4" />
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