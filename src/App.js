import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (obj) => {
    obj.id = uuidv4();
    console.log(obj);
    setFeedback([obj, ...feedback]);
  };

  const doDelete = (id) => {
    if (window.confirm("Do you wnnt to delete this feed back")) {
      setFeedback(feedback.filter((itm) => itm.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm getNewFeedback={(obj) => addFeedback(obj)} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete3={doDelete} />
      </div>
    </>
  );
}

export default App;
