import './styles.scss';

import React from 'react';

/**
 * Component for flow selector element.
 *
 * @component
 * @param {function} handleChange on the component.
 * @param {function} options of the component.
 * @return {object} (
 *   <Dropdown options={options} handleChange={handleChange} />
 * )
 */
interface Props {
  handleChange?: (event: any) => void,
  options: any[] | undefined
}

export const Dropdown: React.FC<Props> = (props) => {
  return (
    <div className="flow-selector">
      <label className="flow-selector__label">Choose a flow:</label>
      <select className="flow-selector__select" onChange={props.handleChange}>
        {props.options && props.options.map((item, key) => (
          <option key={key} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
