import React from 'react';
import "./column.css"

function column(props) {
  var styleObj = {
    height: props.top
  };

  var day = ""
  if (props.day != 0) {
    day = props.day;
  }

  return (
    <div className='column-wrapper'>
      <div style={styleObj} className='columnHeader'>
        <h6>{props.name}</h6>
        <div className='selected'>
          <h3>{day}</h3>
        </div>
      </div>

      <div className='Column'/>
    </div>
  );
}

export default column;
