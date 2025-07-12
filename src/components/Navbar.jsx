import "./Navbar.css";

function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="logo" onClick={() => handleScroll("home")}>
          NEX<span>BOT</span>
        </p>

        <ul className="nav-links">
          <li onClick={() => handleScroll("home")}>Home</li>
          <li onClick={() => handleScroll("about-section")}>About</li>
          <li onClick={() => handleScroll("service-section")}>Services</li>
          <li onClick={() => handleScroll("contact-section")}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
