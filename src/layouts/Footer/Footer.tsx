import './styles.scss';

import React from 'react';

/**
 * Component for footer element.
 *
 * @component
 * @return {object} (
 *   <Footer>
 *     {children}
 *   </Footer>
 * )
 */

export const Footer: React.FC = (props) => {
  return (
    <div className="footer">
      {props.children}
    </div>
  );
};
