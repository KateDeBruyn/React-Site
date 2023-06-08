import React, { Component } from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h1>This is the footer</h1>
        <div className='socialMedia'>
        <InstagramIcon/><TwitterIcon/><YouTubeIcon/>
        </div>
        
    </div>
    )
  }
}
