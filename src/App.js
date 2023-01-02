import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutLink from "./components/AboutLink";
import { Route, Routes, Link } from "react-router-dom";
import { createContext } from "react";
import { ContextOp } from "./ContextOp";

// export const data = createContext();

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (obj) => {
  //   console.log(obj);
  //   setFeedback([obj, ...feedback]);
  // };

  // const doDelete = (id) => {
  //   if (window.confirm("Do you wnnt to delete this feed back")) {
  //     setFeedback(feedback.filter((itm) => itm.id !== id));
  //   }
  // };
  return (
    <>
      {/* <data.Provider value={{ add: addFeedback, deleteFunc: doDelete }}> */}
      <ContextOp>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutLink />
        </div>
      </ContextOp>
      {/* </data.Provider> */}
    </>
  );
}

export default App;
