import React, { Component } from 'react';
import '../styles/Art.css';
import { ArtList } from '../helpers/ArtList';
import ArtItem from '../components/ArtItem';
import { Link } from 'react-router-dom';

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