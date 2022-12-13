import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete3 }) {
  if (!feedback) return <p>NO feed back to display</p>;
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} handleDelete2={handleDelete3} />
      ))}
    </div>
  );
}

export default FeedbackList;
