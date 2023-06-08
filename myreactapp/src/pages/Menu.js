import React, { Component } from 'react';
import { MenuList } from '../helpers/MenuList.js';
import MenuItem from '../components/MenuItem.js';
import "../styles/Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1 className='menuTitle'>Theory Page</h1>
        <div>
            {MenuList.map((menuItem, value) => {
                return(
                    <MenuItem value={value} name={menuItem.name} image={menuItem.image} description={menuItem.description}/>
                )
            })}
        </div>
      </div>
    )
  }
}
