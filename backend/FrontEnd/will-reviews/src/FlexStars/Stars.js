//FlexStars
import './Stars.css'
import Star from "./Star/Star"

function Stars(props) {
  const starLst = [];

  //FlexStars is a duplicate of StaticStars, with the acception that we pass in a function
  //from the parent wrapper which allows each individual star element to return it's star value. 
  //The star value is set by the value of i in the for loop. 
  for (var i = 1; i < 6; i++) {
    if (i <= props.score) {
      starLst.push(<Star setScore={props.setScore} starNum={i} active={true} />);
    } else {
      starLst.push(<Star setScore={props.setScore} starNum={i} active={false} />);
    }
  }


  return (
    <div className="stars">
      {starLst}
    </div>
  );
}

export default Stars;
