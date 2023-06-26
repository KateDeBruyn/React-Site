import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Art.css';
import { ArtList } from '../helpers/ArtList';
import ArtItem from '../components/ArtItem';

import ModernGreen from '../assets/pics/modern_floral_green.png';

export default class Art extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
            <section>
            <h1 className='main-heading'>Interact with Fio</h1>
            <p className='paragraph'>Here you can interact with Fio, my vtuber model who I design, rigged and animated through blood, sweat, and 
            tears. Use the roses you collected throughout the website (there are tons) to redeem making Fio blush or sadge. These are typcial vtuber 
            interactions that many streamers use when hanging out with their communities live. Enjoy!</p>
            <iframe src="https://i.simmer.io/@Keightyrose/fio-interface" className='internet-art'></iframe>
            </section>

            <section>
              <h2 className='section-title'>View more about this artwork below:</h2>
            <div className='artList'>
            {ArtList.map((artItem, value) => {
                return(
                  <Link to={artItem.path} key={this.props.value} className='artLink'><ArtItem value={value} name={artItem.name} image={artItem.image} description={artItem.description}/>
                  </Link>

                )
            })}
            </div>
            </section>
        </article>

      </div>
    )
  }
}