import React from 'react';
// import './Navbar.css'; // You can create your own CSS file for styling
import './header1.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo">Your Logo</div> */}
      <ul className="nav-links">
        <li><a href="https://admirable-crisp-56a163.netlify.app/">⚙️</a></li>
        <li><a href="https://sabzibazaar-1007fe79081d.herokuapp.com/login">👤</a></li>
        <li><a href="https://sabzibazaar-1007fe79081d.herokuapp.com/orders">🎒</a></li>
        <li><a href="https://sabzibazaar-1007fe79081d.herokuapp.com/cart">🛒</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
