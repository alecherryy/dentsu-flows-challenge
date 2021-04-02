import './styles.scss';

import React, { createRef, useEffect, useRef, useState } from 'react';
import { API } from '../../services/FlowService';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { FlowSelector } from '../FlowSelector/FlowSelector';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <DurationInfo handleChange={handleChange} />
 * )
 */
interface Props {
  handleChange?: () => void,
}

export const DurationInfo: React.FC<Props> = (props) => {
  const flowRef = createRef<HTMLSelectElement>();
  const initial: any[] = [];
  const [flows, setFlows] = useState(initial);

  // populate select dropdown on inital render
  useEffect(() => {
    // call API to populate flows
    console.log(flowRef.current?.value);
    const getProcesses = async () => {
      const data = await API.findProcessByFlow(1);

      setFlows(data);
    }

    getProcesses();
  }, []);

  return (
    <div className="duration-comparison">
      <Constrain>
        <FlowSelector selectRef={flowRef} />
      </Constrain>
    </div>
  );
};
