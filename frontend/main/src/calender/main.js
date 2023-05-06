import React from 'react';
import Column from "./column/column"
import "./main.css"
import Line from "./column/line/line"

function main() {
  var Columns = []
  
  var WeekNames = ["","Mon","Tue","Wed","Thu", "Fri", "Sat","Sun"]
  var hourDevide = window.innerHeight / 24;
  var topMargin = 40;

  for (var i = 0; i < WeekNames.length; i++) {
    Columns.push(<Column top={hourDevide+topMargin} day={i.toString()} name={WeekNames[i]}/>);
  }

  var lines = []
  for (var i = 0; i < 24; i++) {
    var APm = "am"
    var hour = i;

    if (hour > 12) {
      APm = "pm";
    }

    if (hour < 10){
      hour = "0"+i.toString();
    } else {
      hour = hour.toString();
    }
    var time = hour + ":" + "00 " + APm; 

    lines.push(<Line time={time} width={1000} top={hourDevide*i+(topMargin+30)}/>);
  }

  return (
    <div className='mainCalender'>
      {lines}
      {Columns}
    </div>
  );
}

export default main;
