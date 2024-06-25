import { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Expense Tracker</a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
        <ul>
            <li>
                <a href="./">Home</a>
            </li>
            <li>
                <a href="./track">Track</a>
            </li>
        </ul>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
