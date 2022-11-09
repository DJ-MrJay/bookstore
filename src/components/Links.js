import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/category">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Links;
