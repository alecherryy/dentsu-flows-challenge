import './styles.scss';

import React from 'react';

/**
 * Component for legend element.
 *
 * @component
 * @return {object} (
 *   <Legend />
 * )
 */
export const Legend: React.FC = () => {
  return (
    <ul className="legend">
      <li className="legend__item legend__item--flow">
        Flow
      </li>
      <li className="legend__item legend__item--highest">
        Highest Avg Duration
      </li>
      <li className="legend__item legend__item--lowest">
        Lowest Avg Duration
      </li>
    </ul>
  );
};