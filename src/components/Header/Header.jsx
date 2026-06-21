import "./Header.css";

const Header = ({ text, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{text}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
