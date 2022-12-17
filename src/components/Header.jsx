import { Link } from "react-router-dom";

function Header({ text, textColor, bGColor }) {
  const design = {
    color: textColor,
    backgroundColor: bGColor,
  };
  return (
    <header style={design}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feed back UI",
  textColor: "#ff6a95",
  bGColor: "rgba(0,0,0,0.4)",
};

export default Header;
