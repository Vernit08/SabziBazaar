import React from 'react';
// import './Navbar.css'; // You can create your own CSS file for styling
import './header1.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo">Your Logo</div> */}
      <ul className="nav-links">
        <li><a href="http://localhost:3000/model">⚙️</a></li>
        <li><a href="https://sabzibazaar-1007fe79081d.herokuapp.com/login">👤</a></li>
        <li><a href="http://localhost:3000/orders">🎒</a></li>
        <li><a href="http://localhost:3000/Cart">🛒</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
