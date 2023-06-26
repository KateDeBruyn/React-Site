import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DesignList } from '../helpers/DesignList.js';
import DesignItem from '../components/DesignItem.js';
import '../styles/Theory.css';
import '../styles/Menu.css';
import '../styles/Design.css';
import PointButton from '../components/PointsButton';

//Imagery
import ModernGreen from '../assets/pics/modern_floral_green.png';
import DesignWF from '../assets/wireframes/Wireframe_Design.png';
import Stylesheet from '../assets/Stylesheet.png'

export default class Design extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>

            <h1 className='main-heading'>Updated Wireframes</h1>
            <section>
            <div className='menu-list'>
            {DesignList.map((designItem, value) => {
                return(
                  <Link to={designItem.path} key={this.props.value} className='menu-link'><DesignItem value={value} name={designItem.name} image={designItem.image} description={designItem.description}/>
                  </Link>
                )
            })}
            </div>
            </section>

            <section>
            <h1 className='main-heading'>Wireframes and Style Guide</h1>
            <p className='paragraph'>
              User Interface (UI) is a field in web design where design focuses on the controls a 
              user will engage with when interacting with a website or app. User Experience (UX) is 
              also a field in web design that focuses on the behaviour of the user and their feelings 
              about the website or app (Ellis, 2018). My wireframes showcase the UI/UX design of my 
              site. My wireframes are for my exam hand-in as I did not achieve some of my design 
              goals in this submission. I felt quite overwhelmed with React and understanding how 
              components, helpers, and pages all work together. The syntax and logic also felt 
              difficult to grasp initially, I am slowly starting to feel more comfortable with it 
              though. I focused on what Andre had to teach us and researched a few other tutorials 
              that would help showcase my current technical ability. So just in case you feel these 
              wireframes look completely off, I just wanted to give some reasoning behind the site, 
              what it looks like now and what I intend for it to look like! Thank you! </p>
            <p></p>
            </section>

            <section>
              <h2 className='section-title'>Stylesheet</h2>
              <div className='design-container'>
                <div className='design-item'>
                  <img className="wireframes-img"
                  src={Stylesheet}
                  alt="A wireframe for my stylesheet."
                  />
                </div>
                <div className='design-item'>
                  <p className='paragraph'>
                  This stylesheet represents the theme that I've taken on for this
                  site. It is inspired by the vtuber character I am drawing and animating
                  for my internet artwork. It's particularly inspired by her
                  eyes - bright green with pink hearts in them. I wanted the site to complement 
                  the internet art, creating a contextual house that brings out the qualities of the artwork.
                  </p>
                </div>
              </div>
                
                
            </section>

            <section>
                <h2 className='section-title'>Design Wireframe</h2>
                <div className='design-container'>

                  <div className='design-item'>
                    <img className="wireframes-img"
                      src={DesignWF}
                      alt="A wireframe for my design page."
                    />
                  </div>
                </div>
                
            </section>
            <section>
              <p className='paragraph'>
              References:
              <br/>
              Ellis, M. 2018. Web design, web development, UI and UX: What's the difference and which do you need? 99designs. Available at: https://99designs.com/blog/web-digital/web-design-development-ui-ux-difference/#:~:text=User%20Interface%20(UI)%20%E2%80%94%20A,using%20the%20site%20or%20app. (Accessed: 4 June 2023)
              </p>
            </section>
            <div className='button-position-page'>
            <PointButton />
            </div>
        </article>
        
      </div>
    )
  }
}