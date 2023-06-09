import React, { Component } from 'react';
import '../styles/Theory.css'
import GreenRoses from '../assets/shutterstock_185445815.jpg';
import Moodboard from '../assets/Moodboard.png';


export default class Rationale extends Component {
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${GreenRoses})`}}>
        <article className='foreground'>
            <section>
            <h1 className='main-heading'>Artwork Rationale</h1>
            <p className='paragraph'>
            The reason why I chose to do a Vtuber rig as my internet art
            project is because Fio exists only through my livestreams. And in
            my streams, my community can engage with her. I will have channel
            point redemptions that allow viewers to change her appearance or
            interact with her like patting her head (a popular Vtuber
            interaction).
            </p>
            <h2 className='section-title'>Moodboard and Inspiration</h2>
            <img 
                className="wireframes-img"
                src={Moodboard}
                alt="A screenshot of the vtuber, Niwwu"
                />
            </section>
        </article>
      </div>
    )
  }
}
