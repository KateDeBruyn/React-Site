import React, { Component } from 'react';
import { MenuList } from '../helpers/MenuList.js';
import MenuItem from '../components/MenuItem.js';
import "../styles/Menu.css";
import { Link } from 'react-router-dom';

import ModernGreen from '../assets/pics/modern_floral_green.png';

export default class Menu extends Component {
  render() {
    return (
      <div className='menu' style={{backgroundImage: `url(${ModernGreen})`}}>
        <h1 className='menuTitle'>Theory Page</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, value) => {
                return(
                  <Link to={menuItem.path} key={this.props.value} className='menuLink'><MenuItem value={value} name={menuItem.name} image={menuItem.image} description={menuItem.description}/>
                  </Link>

                )
            })}
        </div>
      </div>
    )
  }
}
