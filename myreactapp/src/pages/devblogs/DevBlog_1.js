import React, { Component } from 'react';
import '../../styles/Theory.css'
import { Link } from 'react-router-dom';
import ModernFl from '../../assets/pics/modern_floral.jpg';

export default class DevBlog_1 extends Component {
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernFl})`}}>
        <article className='foreground'>
        <Link to='/devblogs' className='backHyperlink'>&lt; Back to blogs</Link>
        <h1 className='main-heading'>Dev Blog One</h1>
            <section>
            <date className='section-title'>23/05/2023</date>
            <p className='paragraph'>
            Initially I have felt React is a bit overwhelming, but like Andre said, it will be for a while.  
            React's component-based architecture and the virtual DOM intrigued me. Andre was clear and helped me 
            understand how to set up a React project, using tools like Create React App, and 
            getting acquainted with JSX syntax. The first component, the nav bar, showed React's declarative nature.
            Andre then showed us routing and navigation, using popular libraries like React Router. I 
            learned how to set up routes and navigate between different views within my application.
            I discovered the advantages of component-based styling and how it can enhance reusability and 
            maintainability in the project.
            </p>
            <p className='paragraph'>
            I did a bit of research around React and came across optimisation which Andre never showed us.
            Some YouTube tutorials that I browsed through showed React Hooks, context API, lazy loading, 
            code splitting, and memoization. You can optimise performance by minimising unnecessary re-renders 
            and making efficient use of React's reconciliation algorithm. Perhaps I'll look at that for the exam if I feel 
            my site is slow.
            </p>
            </section>
        </article>    
      </div>
    )
  }
}