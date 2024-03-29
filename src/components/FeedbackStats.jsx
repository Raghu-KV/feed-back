import React from "react";
import { useContext } from "react";
import { data } from "../ContextOp";

function FeedbackStats() {
  const { feedback } = useContext(data);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>total no of reviews : {feedback.length}</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
