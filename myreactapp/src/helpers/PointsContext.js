//I couldn't find any tutorials to help me figure out how to do this, so I have to give credit to ChatGPT for this one.
//All the styling/imagery and personalisation is done by me though.

import React, { createContext, useState } from 'react';

const PointsContext = createContext();

const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints(points + 10);
  };

  const value = {
    points,
    addPoint,
  };

  return (
    <PointsContext.Provider value={value}>{children}</PointsContext.Provider>
  );
};

export { PointsContext, PointsProvider };
