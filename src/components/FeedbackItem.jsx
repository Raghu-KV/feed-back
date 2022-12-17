import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { data } from "../ContextOp";
import { useContext } from "react";

function FeedbackItem({ item }) {
  const { deleteFeed, editFeedback } = useContext(data);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeed(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
