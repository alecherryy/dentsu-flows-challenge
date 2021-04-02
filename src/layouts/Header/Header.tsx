import './styles.scss';

import React from 'react';
import { Constrain } from '../Constrain/Constrain';

/**
 * Component for header element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} leftContent Left content of the component.
 * @param {node} rightContent Right content of the component.
 * @return {object} (
 *   <Header
 *     leftContent={leftContent}
 *     rightContent={rightContent}
 *   />
 * )
 */

interface Props {
  leftContent: JSX.Element,
  rightContent: JSX.Element
}
export const Header: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <Constrain modifierClasses="constrain--wide">
        <div className="header__inner">
          <div className="header__left">{props.leftContent}</div>
          <div className="header__right">{props.rightContent}</div>
        </div>
      </Constrain>
    </div>
  );
};