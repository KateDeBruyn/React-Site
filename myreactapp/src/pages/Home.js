import React, { Component } from 'react';
import "../styles/Home.css";

//Imagery
//import HomepageImg from '../assets/HomePageImg.png';
import GreenFloral from '../assets/pics/modern_floral_green.png';
import EmoteHey from '../assets/emotes/emote_hey.png';
import Rig from '../assets/Rig.png';

export default class Home extends Component {
  render() {
    return (
      <div className="home" style={{backgroundImage: `url(${GreenFloral})`}}>
        <h1 className='home-title'>Welcome to the Rose Garden</h1>

        {/* KEIGHTYROSE INTRO */}
        <div className='index-container'>
        <div className='index-item'>
        <p>Hi! I'm Keightyrose. A fourth year Game Design student who is also majoring in 
          Interactive Media. I also stream on Twitch which is why my website uses emotes
          and imagery that are typical to platforms like Twitch. This is also the Rose Garden,
          a place for all my petals and a home for Fio. You'll find her in my art section. Collect
          roses throughout the site and spend them to interact with Fio!
        </p>
        </div>
        <div className='index-item'>
        <img className="img-responsive"
                src={EmoteHey}
                alt="A Chibi emote of Keightyrose, waving hello."
                />
        </div>
        <div className='index-item'>
        <h2 className='item-title'>Earn Roses by exploring the website!</h2>
        </div>
        </div>

        {/* VTUBER RIG INTRO */}
        <div className='index-container'>
        <div className='index-item'>
        <h2 className='item-title'>This is Fio. My vtuber character!</h2>
        </div>
        <div className='index-item'>
        <img className="img-responsive"
                src={Rig}
                alt="The vtuber model created by Keighty, named Fio."
                />
        </div>
        <div className='index-item'>
        <p>Hi! I'm Keightyrose. A fourth year Game Design student who is also majoring in 
          interactive media.
        </p>
        </div>
        </div>
      </div>
    )
  }
}
