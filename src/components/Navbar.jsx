import React, { useState } from "react";
import "./Navbar.css";  // We'll add styles here next
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.nav className="navbar" 
    initial={{ y: -250}} 
    animate={{ y: -10}}
    transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
    >
      <div className="logo">Dravyn</div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={"nav-links " + (isOpen ? "open" : "")}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;