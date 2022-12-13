import React from "react";

function Card({ children, darkMode }) {
  return <div className={`card ${darkMode && "reverse"}`}>{children}</div>;
}
Card.defaultProps = {
  darkMode: false,
};
export default Card;
