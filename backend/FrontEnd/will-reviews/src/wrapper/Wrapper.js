//Wrapper
import './Wrapper.css'
import Review from '../Review/Review'
import WriteReview from "../WriteReview/WriteReview"
import React, { useState, useEffect } from 'react';

function Wrapper() {

  //Create a basic state hook to store review data. It starts with a basic default value. But this 
  //is more used throughout testing. Ideally, this could be removed for an actual use-case. 
  const [reviewData,setReviewData] = useState(JSON.parse(('{ "reviews" : [' +
  '{ "titel":"Hes a good bloke" , "description":"Ew boys gross", "stars":1 },' +
  '{ "titel":"Hes a bloke" , "description":"Ew non-binary gross", "stars":4 } ]}')));  

  //The first time Wrapper is instanciated, it'll call the back end to retrieve actual review data. 
  //This data is then set using the setReviewData hook. 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/getData");
      const jsonData = await response.json();
      setReviewData(jsonData);
    };

    fetchData();
  }, []);

  //We slightly reformat data as to provide Review components with the raw data they need. 
  var reviewObjects = [];
  for (var i = reviewData['reviews'].length-1; i >= 0; i--) {
    reviewObjects.push(<Review data={reviewData['reviews'][i]}/>);
  }

  //Returns the array of review objects and the write review component. 
  return (
    <div id="Wrapper">
      <WriteReview reviewData={reviewData} setReviewData={setReviewData} data={2}/>
      {reviewObjects}
    </div>
  );
}

export default Wrapper;
