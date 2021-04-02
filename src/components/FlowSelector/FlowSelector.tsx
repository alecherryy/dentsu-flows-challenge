import './styles.scss';

import React, { useEffect, useState } from 'react';
import { API } from '../../services/FlowService';

/**
 * Component for flow selector element.
 *
 * @component
 * @return {object} (
 *   <FlowSelector handleChange={handleChange} />
 * )
 */
interface Props {
  handleChange?: () => void,
  selectRef: any,
}

export const FlowSelector: React.FC<Props> = (props) => {
  const initial: any[] = [];
  const [flows, setFlows] = useState(initial);

  // populate select dropdown on inital render
  useEffect(() => {
    // call API to populate flows
    const getFlows = async () => {
      const data = await API.findAllFlows();

      setFlows(data);
    }

    getFlows();
  }, []);

  return (
    <div className="flow-selector">
      <label className="flow-selector__label">Choose a flow:</label>
      <select className="flow-selector__select" onChange={props.handleChange}
        ref={props.selectRef}>
        {flows.map((item, key) => (
          <option key={key} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
