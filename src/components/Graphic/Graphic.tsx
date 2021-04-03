import './styles.scss';

import React from 'react';

/**
 * Component for graphic element.
 *
 * @component
 * @return {object} (
 *   <Graphic source={source} name={name} />
 * )
 */
interface Props {
  source: string,
  name: string,
}
export const Graphic: React.FC<Props> = (props) => {
  return (
    <img src={props.source} alt="Decorative Graphic" className={[
      'graphic',
      `graphic--${props.name}`,
    ].join(' ').trim()} />
  );
};