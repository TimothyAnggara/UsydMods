import React from 'react';
import "./line.css"

function horizontalLine(props) {
  const styleObj = {
    top: props.top,
    width: props.width,
  };

  return (
    <div style={styleObj} className="line-wrapper">
      <div className="inline-wrapper">
        <h4>{props.time}</h4>
        <div className="line-horizontal"/>
      </div>
    </div>
  );
}

export default horizontalLine;
