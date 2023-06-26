import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css';
import '../../styles/Menu.css';
import PointButton from '../../components/PointsButton';
//Imagery
import ModernGreen from '../../assets/pics/modern_floral_green.png';
import HomeWF from '../../assets/wireframes/Wireframe_Home.png';

export default class HomeRedesign extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
          <section>
                <h1 className='main-heading'>Home Wireframe</h1>
                <img
                className="wireframes-img"
                src={HomeWF}
                alt="A wireframe for my home page."
                />
                <p className='paragraph'>
                  This is the intended look for the index page after I found some inspiration from searching 
                  “rose themed websites”. I feel I have always had quite ‘safe’ looking home pages and after 
                  finding some sources of inspiration, I am ready to try out something new. My home page was 
                  inspired by a Vtuber Intro Card that I came across. It was originally created by @setsudasai 
                  when they hit 900 followers and created an intro card as a thank you. My home page serves as 
                  the main entry point and sets the tone for the entire website, so I wanted to immediately align 
                  it with vtubers and vtubing because that is what my internet art is based on. My home page can 
                  showcase my potential for a brand identity and establish a strong visual presence. I feel 
                  ‘KeightyRose’ does have a brand identity, one in video gaming, digital art and vtubing. I want 
                  to use this brand to build trust with my viewers because it directly influences user behaviour 
                  and impacts the success of the website, the internet art and my goals for both. Thus, I wanted 
                  the index page to showcase my brand identity, set up the expectations for the internet art and 
                  the rest of the site, and give enough information to the user that helps them contextualise the 
                  entire site. I have used imagery for what I hope to make into components for the exam, such as 
                  the ‘describe yourself’ section and the ‘are you’ slider section. </p>
            </section>
        </article>
      </div>
    )
  }
}
