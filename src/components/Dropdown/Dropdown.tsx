import './styles.scss';

import React from 'react';

/**
 * Component for dropdown element.
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
    <div className="dropdown">
      <label className="dropdown__label">Choose a flow:</label>
      <select className="dropdown__select" onChange={props.handleChange}>
        {props.options?.map((item, key) => (
          <option key={key} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
