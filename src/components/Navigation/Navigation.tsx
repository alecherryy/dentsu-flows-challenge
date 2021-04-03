import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for navigation element.
 *
 * @component
 * @return {object} (
 *   <Navigation />
 * )
 */
export const Navigation: React.FC = () => {
  return (
    <nav role="navigation" className="nav-menu">
      <button className="nav-menu__icon">Menu</button>
      <ul className="nav-menu__menu">
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="/">Demos</Link>
        </li>
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="/">Product</Link>
        </li>
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="/team">Team</Link>
        </li>
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="/about">About</Link>
        </li>
      </ul>
      <Link className="nav-menu__link nav-menu__link--btn" to="/">Login</Link>
    </nav>
  );
};