import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Initialize activeBox position based on the initial active link
  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
      
    }
  };

  // Call initActiveBox on the first render to position activeBox initially
  useEffect(initActiveBox, []);

  // Handler to update active link and activeBox position when a link is clicked
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    // Update the position and size of activeBox
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {/* Initialize lastActiveLink with the first link */}
      <a ref={lastActiveLink} href="#home" className="nav-link active" onClick={activeCurrentLink}>Home</a>
      <a href="#about" className="nav-link" onClick={activeCurrentLink}>About</a>
      <a href="#work" className="nav-link" onClick={activeCurrentLink}>Work</a>
      <a href="#contact" className="nav-link" onClick={activeCurrentLink}>Contact</a>
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;


