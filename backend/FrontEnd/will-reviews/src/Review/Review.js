
import './Review.css'
import Stars from "../StaticStars/Stars"

//A simple element constructed largly of pure html. Represents the reviews left my other users. 
function Review(props) {
  return (
    <div className="review">
      
      <div class="reviewHeadWrapper">
        <div class="one">
          <h3>{props.data['titel']}</h3>
        </div>
        <div class="two">
          <Stars editable={false} star={props.data['stars']}/>
        </div>
      </div>

      <p>{props.data['description']}</p>

    </div>
  );
}

export default Review;
