import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ getNewFeedback }) {
  const [textFeedback, setTextFeedback] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const [selected, setSelected] = useState(0);

  const handleTextChange = (event) => {
    if (!textFeedback) {
      setDisabled(true);
      setErrorMsg("null");
    } else if (textFeedback && textFeedback.trim().length < 11) {
      setDisabled(true);
      setErrorMsg("feed back must be more than 10 characters");
    } else {
      setDisabled(false);
      setErrorMsg(null);
    }
    setTextFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textFeedback.trim().length > 10) {
      const newFeedback = {
        text: textFeedback,
        rating: selected,
      };

      getNewFeedback(newFeedback);

      setTextFeedback("");
      setSelected(0);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Provied your rating</h2>
        <RatingSelect selected={selected} setSelected={setSelected} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="write a review"
            value={textFeedback}
          />
          <Button type="submit" isDisabled={disabled}>
            submit
          </Button>
        </div>
        {errorMsg && <div className="message">{errorMsg}</div>}
      </form>
      {/* <button onClick={test}>oooooo</button> */}
    </Card>
  );
}

export default FeedbackForm;
