
import './Star.css'
import starImage from './Star.png'
import deadStar from './DeadStar.png'

function Star(props) {
  var star = deadStar;
  
  //We've loaded two images, star and dead star. 
  //If the active status has been set to true, then it changes the star variable to the active star image. 
  //Otherwise it presents a 'dead' star. 
  if (props.active) {
    star = starImage;
  }

  return (
    <div className="star">
      <img src={star} alt="Italian Trulli"></img>
    </div>
  );
}

export default Star;
