//I couldn't find any tutorials to help me figure out how to do this, so I have to give credit to ChatGPT for this one.
//All the styling/imagery and personalisation is done by me though.

import React, { useContext, useState } from 'react';
import { PointsContext } from '../helpers/PointsContext';
import '../styles/PointsButton.css';
import RoseEmote from '../assets/pics/yellowRose72x72.png';


const PointButton = () => {
    const { points, addPoint } = useContext(PointsContext);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      addPoint();
      setIsClicked(true);
    };
  
    return (
      <div>
        {!isClicked && (
          <button onClick={handleClick} className='rose-button'><img src={RoseEmote}/></button>
        )}
        {isClicked && (
          <p className='points-txt'>
            Roses collected: 
            <br/>
            {points.toString()}
            </p>
        )}
      </div>
    );
  };
  
  export default PointButton;

