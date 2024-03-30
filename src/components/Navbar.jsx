import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/student">Student</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
