import React from 'react';

/**
 * Component for main element.
 *
 * @component
 * @param {node} children Children of the component.
 * @return {object} (
 *   <Main>
 *     {children}
 *   </Main>
 * )
 */

export const Main: React.FC = (children) => {
  return (
    <main role="main">
      {children}
    </main>
  );
};