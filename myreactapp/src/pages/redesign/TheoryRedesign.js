import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Theory.css';
import '../../styles/Menu.css';
import PointButton from '../../components/PointsButton';
//Imagery
import ModernGreen from '../../assets/pics/modern_floral_green.png';
import TheoryWF from '../../assets/wireframes/Wireframe_Theory.png';
import NewTheoryWF from '../../assets/wireframes/New_WF_Theory.png';

export default class TheoryRedesign extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <article className='foreground'>
        <Link to='/design' className='backHyperlink'>&lt; Back to main design page</Link>
          <section>
          <h1 className='main-heading'>New Theory Wireframe</h1>
                <img className="wireframes-img"
                src={NewTheoryWF}
                alt="A new wireframe for my theory page."
                />
                <p className='paragraph'>
                Because of time constraints, I couldn't achieve my initial plan. So I opted for something that was reusable and effective 
                which is where React shines. I knew my other layouts similar to this looked neat and the information was concise for the user.
                </p>
          </section>
          <section>
                <h2 className='main-heading'>Old Theory Wireframe</h2>
                <img className="wireframes-img"
                src={TheoryWF}
                alt="A wireframe for my theory page."
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
                <p className='paragraph'>
                  I had initially made a theory page that was going to house the access to the rationale, blogs and essay. I struggled to 
                  make these into functional links with new pages so that is why I have my pages in my nav bar for now. I still found this
                  fairly complex to do because I couldn't really figure out how the helper, component and page all work together. I couldn't
                  use my own naming conventions because it did not work, so I stuck to what Andre had laid out. 
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
