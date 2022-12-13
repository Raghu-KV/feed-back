import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [textFeedback, setTextFeedback] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const handleTextChange = (event) => {
    // console.log(textFeedback, "top");
    if (!textFeedback) {
      setDisabled(true);
      setErrorMsg("ok");
    } else if (textFeedback && textFeedback.trim().length <= 10) {
      setDisabled(true);
      setErrorMsg("feed back must be more than 10 characters");
    } else {
      setDisabled(false);
      setErrorMsg(null);
    }
    setTextFeedback(event.target.value);
  };

  //   function test() {
  //     console.log(textFeedback, "outside");
  //   }

  return (
    <Card>
      <form>
        <h2>Provied your rating</h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="write a review"
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
