import './styles.scss';

import React from 'react';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Component for intro element.
 *
 * @component
 * @return {object} (
 *   <Intro eyebrow={eyebrow} title={title}>
 *      {children}
 *   </Intro>
 * )
 */
interface Props {
  eyebrow?: string,
  title?: any,
}
export const Intro: React.FC<Props> = (props) => {
  return (
    <Constrain modifierClasses="constrain--narrow">
      <div className="intro">
        {props.eyebrow &&
          <span className="intro__eyebrow">{props.eyebrow}</span>
        }
        {props.title}
        {props.children}
      </div>
    </Constrain>
  );
};