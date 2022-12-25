import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { data } from "../ContextOp";

function FeedbackList() {
  const { feedback, isLoading } = useContext(data);

  if (isLoading === true) return <h3>Loading...</h3>;
  if (feedback.length === 0 && isLoading === false)
    return <p>NO feed back to display</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
