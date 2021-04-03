import './styles.scss';

import React from 'react';

/**
 * Component for section element.
 *
 * @component
 * @return {object} (
 *   <Section eyebrow={eyebrow} title={title}>
 *      {children}
 *   </Section>
 * )
 */
interface Props {
  modifierClasses?: string,
}
export const Section: React.FC<Props> = (props) => {
  return (
    <div className={[
      'section', props.modifierClasses].join(' ').trim()}>
      <div className="section__inner">
        {props.children}
      </div>
    </div>
  );
};