import React from 'react';
// import './Navbar.css'; // You can create your own CSS file for styling
import './header1.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo">Your Logo</div> */}
      <ul className="nav-links">
        <li><a href="http://localhost:3000/model">⚙️</a></li>
        <li><a href="http://localhost:3000/login">👤</a></li>
        <li><a href="http://localhost:3000/orders">🎒</a></li>
        <li><a href="http://localhost:3000/Cart">🛒</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;