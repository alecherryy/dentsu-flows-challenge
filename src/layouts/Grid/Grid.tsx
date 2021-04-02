import './styles.scss';

import React from 'react';

/**
 * Component for grid layout element.
 *
 * @param {node} children of the component
 * @param {number} numOfCols number of columns in layout.
 * @return {object} (
 *   <Grid numOfCols={numOfCols}>
 *     {children}
 *   </Grid>
 * )
 */
interface Props {
  numOfCols?: number
}

export const Grid: React.FC<Props> = (props) => {
  const modifierClass = `grid--${props.numOfCols || 1}-col`;

  return (
    <div className={['grid', modifierClass].join(' ').trim()}>
      {props.children}
    </div>
  );
};