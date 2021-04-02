import './styles.scss';

import React from 'react';

/**
 * Component for constrain element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} children Children of the component.
 * @return {object} (
 *   <Constrain modifierClasses={modifierClasses} />
 *      {children}
 *   </Constrain>
 * )
 */
interface Props {
  modifierClasses?: string
}

export const Constrain: React.FC<Props> = (props) => {
  return (
    <div className={['constrain', `${props.modifierClasses}`].join(' ').trim()}>
      {props.children}
    </div>
  );
};
