import { createContext, useState } from "react";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

// this is the context itself
export const data = createContext();

// function which provide context.provider
export function ContextOp({ children }) {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (obj) => {
    obj.id = uuidv4();
    setFeedback([obj, ...feedback]);
  };

  const doDelete = (id) => {
    if (window.confirm("Do you wnnt to delete this feed back")) {
      setFeedback(feedback.filter((itm) => itm.id !== id));
    }
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (itm) => {
    setFeedbackEdit({
      item: itm,
      edit: true,
    });
  };

  const updateFeedback = (id, updateItm) => {
    setFeedback(
      feedback.map((item) =>
        id === item.id ? { ...item, ...updateItm } : item
      )
    );
  };

  return (
    <data.Provider
      value={{
        addFeed: addFeedback,
        deleteFeed: doDelete,
        feedback: feedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback,
        feedbackEdit: feedbackEdit,
      }}
    >
      {children}
    </data.Provider>
  );
}
