import React from "react";
import Card from "./shared/Card";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

import { useContext } from "react";
import { data } from "../ContextOp";

function FeedbackForm() {
  const { addFeed, feedbackEdit, updateFeedback } = useContext(data);
  const [textFeedback, setTextFeedback] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const [selected, setSelected] = useState(5);

  const handleTextChange = (event) => {
    if (!textFeedback) {
      setDisabled(true);
      setErrorMsg(null);
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

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeed(newFeedback);
      }

      setTextFeedback("");
      setSelected(5);
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setDisabled(false);
      setTextFeedback(feedbackEdit.item.text);
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // if (feedbackEdit.edit === true) {
  //   setDisabled(false);
  //   setTextFeedback(feedbackEdit.item.text);
  //   setSelected(feedbackEdit.item.rating);
  // }

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
    </Card>
  );
}

export default FeedbackForm;
