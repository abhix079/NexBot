import "./Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="logo">
          NEX<span>BOT</span>
        </p>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
