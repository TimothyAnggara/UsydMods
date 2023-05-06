
import './WriteReview.css'
import React, { useState } from 'react';
import Stars from "../FlexStars/Stars"

function WriteReview(props) {

  //We create a score state hook. This is used to set and change the star-rating of the review. 
  //The function setScore are passed down to the FlexStars element, which further passes it down
  //to indiviudal star elements. This allows 
  const [score, setScore] = useState();  

  //update data is mostly written with vanilla javascript, with exception to the use of the score and fetch
  //which are react specific components. 
  function updateData() {
    //Gets the TielInput and DescriptionInput dom element by id
    var Titel = document.getElementById("ReviewTitel");
    var Description = document.getElementById("description");
    var Score = score; 

    //Pushes the new aquired data to the review data declared in Wrapper and passed down as a prop.
    props.reviewData['reviews'].push({ "titel":Titel.value , "description":Description.value, "stars":Score})
    
    //Calls the database function and inserts a new entry for the review data. 
    const updateDatabase = async () => {
      const response = await fetch(`${'http://127.0.0.1:5000/saveData'}?titel=${Titel.value}&description=${Description.value}&stars=${Score}`);
    };
    updateDatabase();

    //Resets the input DOM elements and sets the star rating to zero. 
    //This resets these elements to a default blank state. 
    Titel.value = ""
    Description.value = ""
    setScore(0);

    //To reduce bandwith, we use the setReviewData hook delcaired in the wrapper 
    //with a copy of the review data. 
    //We stringify the json object then parse it back to create a new instance of the json data object.
    //Otherwise the setReviewData doesn't recognise the new data as it only sees a json file stored in ram.  
    props.setReviewData(JSON.parse(JSON.stringify(props.reviewData)));
  }

  return (
    <div className="writeReview">
      
      <div class="reviewHeadWrapper">

        <div class="one">
          <input id="ReviewTitel"></input>
        </div>
        <div class="two">
          <Stars score={score} setScore={setScore} editable={true} star={0}/>
        </div>

      </div>

      <textarea id="description" class="comment"></textarea>
      
      <div className='btnWrapper'>
        <button onClick={() => updateData()} class="submitBtn" type="button">Submit</button>
      </div>
      
    </div>
  );
}

export default WriteReview;
