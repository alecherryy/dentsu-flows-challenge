import './styles.scss';

import React from 'react';

/**
 * Component for flow selector element.
 *
 * @component
 * @return {object} (
 *   <Dropdown flows={flows} handleChange={handleChange} />
 * )
 */
interface Props {
  handleChange?: (event: any) => void,
  flows: any[] | undefined
}

export const Dropdown: React.FC<Props> = (props) => {
  return (
    <div className="flow-selector">
      <label className="flow-selector__label">Choose a flow:</label>
      <select className="flow-selector__select" onChange={props.handleChange}>
        {props.flows && props.flows.map((item, key) => (
          <option key={key} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
