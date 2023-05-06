//StaticStars
import './Stars.css'
import React, { useState } from 'react';

import Star from "./Star/Star"

function Stars(props) {

  //We build the starLst component list with individual star elements. 
  //If star component is being generated on an iteration less than or equal to the 
  //provided star rating, then it's set to an active state. 
  const starLst = [];
  for (var i = 1; i < 6; i++) {
    if (i <= props.star) {
      starLst.push(<Star starNum={i} active={true} />);
    } else {
      starLst.push(<Star starNum={i} active={false} />);
    }
  }


  return (
    <div className="stars">
      {starLst}
    </div>
  );
}

export default Stars;
