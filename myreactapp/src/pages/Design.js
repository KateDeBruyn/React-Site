import React, { Component } from 'react';
import '../styles/Theory.css'
import { MenuList } from '../helpers/MenuList.js';
import MenuItem from '../components/MenuItem.js';
import "../styles/Menu.css";

//Imagery
import GreenRoses from '../assets/shutterstock_185445815.jpg';
import ArtWF from '../assets/wireframes/Wireframe_Art.png';
import DesignWF from '../assets/wireframes/Wireframe_Design.png';
import HomeWF from '../assets/wireframes/Wireframe_Home.png';
import TheoryWF from '../assets/wireframes/Wireframe_Theory.png';
import Stylesheet from '../assets/Stylesheet.png'

export default class Design extends Component {
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${GreenRoses})`}}>
        <article className='foreground'>
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

            <section>
                <h2 className='section-title'>Stylesheet</h2>
                <img className="wireframes-img"
                src={Stylesheet}
                alt=""
                />
                <p className='paragraph'>
                This stylesheet represents the theme that I've taken on for this
                site. It is inspired by the vtuber character I am drawing and animating
                for my internet artwork. It's particularly inspired by her
                eyes - bright green with pink hearts in them. I wanted the site to complement 
                the internet art, creating a contextual house that brings out the qualities of the artwork.
                </p>
            </section>

            <section>
                <h2 className='section-title'>Home Wireframe</h2>
                <img
                className="wireframes-img"
                src={HomeWF}
                alt=""
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

            <section>
                <h2 className='section-title'>Art Wireframe</h2>
                <img className="wireframes-img"
                src={ArtWF}
                alt=""
                />
                <p className='paragraph'>
                  My art section will contain a WebGL interface where my vtuber rig will be displayed and interacted with. I 
                  plan to have users collect points throughout the website, like after reading the essay or blog post, and then 
                  use points in the interface to change the character's appearance. The goal is to mimic channel points in Twitch 
                  because that it the environment my internet art typically comes from. I feel it will help contextualise the artwork 
                  in the greater ecosystem of the internet. Users familiar with Twitch will see the correlation between my site and 
                  my internet art's 'home'. There will be a description for the artwork and a link, in the form of the theory cards 
                  I will have on the theory page, to the research. I did not want to make the page too cluttered because I wanted the 
                  interface to be the most prominent part of the page, to make its presence most significant and to get users to focus 
                  on interacting with it.
                </p>
            </section>

            <section>
                <h2 className='section-title'>Theory Wireframe</h2>
                <img className="wireframes-img"
                src={TheoryWF}
                alt=""
                />
                <p className='paragraph'>
                I aim to design my theory page this way (and align it in a similar fashion to my previous blog pages). 
                I wanted to avoid the usual columns or rows I have previously used because I wanted something that 
                would communicate more. This design promotes more visual hierarchy, making one topic the central 
                focus on the page. Visual hierarchy helps convey my information in a clear and concise manner. By 
                using visual cues such as size, colour, contrast (like drop-shadows), and placement, I can emphasise 
                important elements and guide the viewer's eyes to follow a logical flow as well as direct the 
                information I want to be foregrounded. The hierarchy I have designed establishes a flow within a 
                design, guiding the viewer's eyes in a specific direction. This is to improve comprehension and 
                understanding, like with what we learned from last year’s UI/UX readings. I have chosen to make my 
                internet art research the emphasised panel because I feel that is what is synthesising the entire 
                site. I was inspired by blog pages that have this type of design, foregrounding a main article and 
                arranging other (maybe smaller or less recent) articles around it.
                </p>
                <div className='menu'>
                <h2>Provisional but non-functional Components</h2>
                  <div className='menuList'>
                      {MenuList.map((menuItem, value) => {
                          return(
                              <MenuItem value={value} name={menuItem.name} image={menuItem.image} description={menuItem.description}/>
                          )
                      })}
                  </div>
                </div>
                <p className='paragraph'>
                  I had initially made a theory page that was going to house the access to the rationale, blogs and essay. I struggled to 
                  make these into functional links with new pages so that is why I have my pages in my nav bar for now. I still found this
                  fairly complex to do because I couldn't really figure out how the helper, component and page all work together. I couldn't
                  use my own naming conventions because it did not work, so I stuck to what Andre had laid out. 
                </p>
            </section>

            <section>
                <h2 className='section-title'>Design Wireframe</h2>
                <img className="wireframes-img"
                src={DesignWF}
                alt=""
                />
            </section>
        </article>
        
      </div>
    )
  }
}