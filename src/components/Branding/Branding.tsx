import './styles.scss';

import React from 'react';

import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

/**
 * Component for branding element.
 *
 * @component
 * @return {object} (
 *   <Branding />
 * )
 */
export const Branding: React.FC = () => {
  return (
    <div className="branding">
      <Link to="/">
        <img src={Logo} alt="DataFlow Logo" />
      </Link>
    </div>
  );
};