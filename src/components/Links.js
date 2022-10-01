import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <nav id="navbar-container">
    <ul className="navbar-items">
      <li className="nav-link">
        <Link to="/">BOOKS</Link>
      </li>
      <span className="vertical-line" />
      <li className="nav-link">
        <Link to="/category">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Links;
