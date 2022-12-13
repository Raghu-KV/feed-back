import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(0);
  const [feedback, SetFeedback] = useState(
    "this is an example of a feed back item"
  );

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedback}</div>
    </div>
  );
}

export default FeedbackItem;
