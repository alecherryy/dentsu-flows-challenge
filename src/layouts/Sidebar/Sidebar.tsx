import './styles.scss';

import React from 'react';

/**
 * Component for sidebar element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} leftContent Left content of the component.
 * @param {node} rightContent Right content of the component.
 * @return {object} (
 *   <Sidebar modifierClasses={modifierClasses} />
 *      {leftContent}
 *      {rightContent}
 *   </Sidebar>
 * )
 */
interface Props {
  modifierClasses?: string,
  leftContent: JSX.Element,
  rightContent: JSX.Element
}
export const Sidebar: React.FC<Props> = (props) => {
  return (
    <div
      className={['sidebar', `${props.modifierClasses}`].join(' ').trim()}
    >
      <div className="sidebar__left">{props.leftContent}</div>
      <div className="sidebar__right">{props.rightContent}</div>
    </div>
  );
};