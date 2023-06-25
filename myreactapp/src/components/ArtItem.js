import React, { Component } from 'react'

export default class ArtItem extends Component {
  render() {
    return (
        <div className="artItem">
        
        <div style={{backgroundImage: `url(${this.props.image})`}}></div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </div>
      
    )
  }
}
