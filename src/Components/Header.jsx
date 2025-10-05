
import React, { useState } from "react"; // Import useState
import Navbar from "./Navbar"; // Assuming Navbar is a separate component

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 
    0 md: md:mt-4 mb-1.5 ">
  <div
    className="max-w-screen-sm w-full mx-auto px-4
    flex justify-between items-center"
  >

    
    <div className="relative flex justify-center md:justify-between md:items-center">
      {/* Mobile Menu Button */}
      <button
        className="menu-btn block md:hidden"
        onClick={() => setNavOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-rounded text-zinc-50 text-2xl">
          {navOpen ? "close" : "menu"}
        </span>
      </button>

     
      <Navbar navOpen={navOpen} />
    </div>

    
    <div className="flex justify-end">
      <a
        href="#contact"
        className="btn btn-secondary hidden md:inline-flex items-center justify-center"
      >
        Contact Me
      </a>
    </div>
  </div>
</header>

  );
}

export default Header;

