import { createContext, useState, useEffect } from "react";

// this is the context itself
export const data = createContext();

// function which provide context.provider
export function ContextOp({ children }) {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    requestApi();
  }, []);

  // API get request
  const requestApi = async () => {
    const responce = await fetch(
      "https://638df99faefc455fb2b139a4.mockapi.io/feedback"
    );
    const data1 = await responce.json();
    setFeedback(data1);
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  // API to add data

  const addApi = async (obj) => {
    const responce = await fetch(
      "https://638df99faefc455fb2b139a4.mockapi.io/feedback",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json" },
      }
    );
    const data2 = await responce.json();
    console.log(data2);
    setFeedback([...feedback, data2]);
  };

  const addFeedback = (obj) => {
    addApi(obj);

    // obj.id = uuidv4();
    // setFeedback([obj, ...feedback]);
  };

  // API to delete
  const doDelete = async (id) => {
    if (window.confirm("Do you wnnt to delete this feed back")) {
      await fetch(
        `https://638df99faefc455fb2b139a4.mockapi.io/feedback/${id}`,
        {
          method: "DELETE",
        }
      );
      // requestApi();
      setFeedback(feedback.filter((itm) => itm.id !== id));
    }
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (itm) => {
    console.log(itm);
    setFeedbackEdit({
      item: itm,
      edit: true,
    });
  };

  // API for update
  const updateFeedback = async (id, updateItm) => {
    const responce = await fetch(
      `https://638df99faefc455fb2b139a4.mockapi.io/feedback/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(updateItm),
        headers: { "content-type": "application/json" },
      }
    );
    const data3 = await responce.json();
    // console.log(data3);
    setFeedback(feedback.map((item) => (id === item.id ? data3 : item)));
    // requestApi();
    setFeedbackEdit({ edit: false });

    // setFeedbackEdit.edit = false;
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
        setFeedbackEdit: setFeedbackEdit,
        isLoading: isLoading,
      }}
    >
      {children}
    </data.Provider>
  );
}
