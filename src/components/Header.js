import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../App.css';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    opacity: isActive ? '100%' : '50%',
    textDecoration: isActive ? 'none' : 'none',
    backgroundColor: isActive ? '#ffffff' : '#ffffff',
  });
  return (
    <section className="headerWrapper">
      <div className="headerContainer">
        <span className="logo">Bookstore CMS</span>
        <div className="nav-links">
          <NavLink
            to="/"
            style={navLinkStyles}
          >
            <span className="books">BOOKS</span>
          </NavLink>

          <NavLink
            to="categories"
            style={navLinkStyles}
          >
            <span className="categories">CATEGORIES</span>
          </NavLink>
        </div>
      </div>
      <button type="submit" aria-label="User" className="userIcon"><FaUser /></button>
    </section>
  );
}

export default Header;
