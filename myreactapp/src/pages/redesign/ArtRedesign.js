import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css';
import '../../styles/Menu.css';
import PointButton from '../../components/PointsButton';
//Imagery
import ModernGreen from '../../assets/pics/modern_floral_green.png';
import ArtWF from '../../assets/wireframes/Wireframe_Art.png';


export default class ArtRedesign extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
          <section>
                <h1 className='main-heading'>Art Wireframe</h1>
                <img className="wireframes-img"
                src={ArtWF}
                alt="A wireframe for my art page."
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
        </article>
      </div>
    )
  }
}
