import React, { Component } from 'react';
import { DevList } from '../helpers/DevList.js'
import BlogItem from '../components/BlogItem';
import "../styles/DevBlogs.css"
import { Link } from 'react-router-dom';

export default class DevBlogs extends Component {
  render() {
    return (
      <div className='blog'>
        <h1 className='blogTitle'>Developer Blogs</h1>
        <div className='blogList'>
            {DevList.map((devList, value) => {
                return(
                  <Link to={devList.path} key={this.props.value}><BlogItem value={value} name={devList.name} image={devList.image} description={devList.description}/>
                  </Link>

                )
            })}
        </div>
      </div>
    )
  }
}
