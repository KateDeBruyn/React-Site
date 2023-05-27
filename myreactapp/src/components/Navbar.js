import React, { Component } from 'react'
import Logo from '../assets/emote_hey500x500.png';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            openLinks : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(prevState => ({
            openLinks : !prevState.openLinks
        }));
        
    }

  render() {
    return (
      <div className="navbar">
        <div className="leftSide" id={this.state.openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className="hiddenLinks">
            <Link to='/'>Home</Link>
            <Link to='/internetArt'>Art</Link>
            <Link to='/theory'>Theory</Link>
            <Link to='/style'>Style</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to='/'>Home</Link>
            <Link to='/internetArt'>Art</Link>
            <Link to='/theory'>Theory</Link>
            <Link to='/style'>Style</Link>
            <button onClick={this.toggleNav}><ReorderIcon/></button>
        </div>
        </div>
    )
  }
}
