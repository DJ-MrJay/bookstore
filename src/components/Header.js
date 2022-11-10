import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header className="header-container">
    <h1 className="header-title">Bookstore CMS</h1>
    <Links />
  </header>
);

const Links = () => (
  <nav>
    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Header;
