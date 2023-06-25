import React, { Component } from 'react';
import { DevList } from '../helpers/DevList.js'
import BlogItem from '../components/BlogItem';
import "../styles/DevBlogs.css"
import { Link } from 'react-router-dom';

import ModernGreen from '../assets/pics/modern_floral_green.png';

export default class DevBlogs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className='content' style={{backgroundImage: `url(${ModernGreen})`}}>
        <div className='blog'>
        <h1 className='blogMainTitle'>Developer Blogs</h1>
        <div className='blogList'>
            {DevList.map((devList, value) => {
                return(
                  <Link to={devList.path} key={this.props.value} className='blogLink'><BlogItem value={value} name={devList.name} image={devList.image} description={devList.description}/>
                  </Link>

                )
            })}
        </div>
      </div>
      </div>
    )
  }
}
