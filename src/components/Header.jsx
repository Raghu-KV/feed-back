function Header({ text, textColor, bGColor }) {
  const design = {
    color: textColor,
    backgroundColor: bGColor,
  };
  return (
    <header style={design}>
      <div className="container">
        <h2>{text}</h2>
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
