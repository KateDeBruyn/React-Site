import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Theory.css';
import PointButton from '../components/PointsButton';
import ModernGreen from '../assets/pics/modern_floral_green.png';
import Moodboard from '../assets/Moodboard.png';


export default class Rationale extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
            <section>
            <h1 className='main-heading'>Artwork Rationale</h1>
            <p className='paragraph'>
            I chose to do a Vtuber character as my internet art
            project because she is composed of animated artwork that exists only through my livestreams on the internet. 
            This is something we discussed when trying to define 'Internet Art'. Our class felt that it is artwork that 
            cannot exist without the internet. Vtubers originate from YouTube, the term itself means 'Viritual YouTuber'.
            Thus, vtuber artwork, the art of character design and animation, was born and only exists in online platforms that 
            require the internet. Vtubing and researching vtuber identity is currently my passion project across two of my university 
            courses so I felt Interactive Media would be a good place to showcase the practical side of the project. In my research 
            course, I have dived into vtuber gender performance and identity and it has strengthened my internet art's design process.
            </p>
            <h2 className='section-title'>Moodboard and Inspiration</h2>
            <img 
                className="wireframes-img"
                src={Moodboard}
                alt="A screenshot of the vtuber, Niwwu"
            />
            <p className='paragraph'>
            My inspiration for the artwork and subsequently the website came from various sources. The Vtuber Intro Card is what inpsired 
            my index/home page. I explain this further in my <Link to='/design' className='hyperlink'>Design section</Link>. I wanted 
            something a bit more unique than a red rose so that is what inspired the green colour. Green is quite an energising colour, 
            a quality that the vtuber character has to her. But I used darker greens to help 'calm' the areas of focus on the site as I 
            felt bright greens may be distracting when trying to read a paragraph like this. In the moodboard is a screenshot of Code Miko. 
            She is one of my biggest vtuber inspirations, though she is in 3D. For my digital prac next semester, I will be embarking on a 
            3D journey! 
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
