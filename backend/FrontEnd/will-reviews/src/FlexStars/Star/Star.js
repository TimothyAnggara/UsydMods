
//Star - FlexStars
import './Star.css'
import starImage from './Star.png'
import deadStar from './DeadStar.png'

function Star(props) {
  var star = deadStar;
  
  if (props.active) {
    star = starImage;
  }

  //This is nearly identical to the Static Star element. However, if also pass in a hook
  //that allows this star to return it's own star value. 
  return (
    <div onClick={() => props.setScore(props.starNum)} className="star">
      <img src={star} alt="Italian Trulli"></img>
    </div>
  );
}

export default Star;
