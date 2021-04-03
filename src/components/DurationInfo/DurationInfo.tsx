import './styles.scss';

import React, { useEffect, useState } from 'react';
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
  // const initial: any[] = [];
  const [flows, setFlows] = useState<any[] | undefined>(undefined);
  const [processIds, setProcessIds] = useState<any[] | undefined>(undefined);
  const [id, setId] = useState('');

  // populate select dropdown on inital render
  useEffect(() => {
    if (id !==  null) {
      getFlows();
    }

    getFlowProcess()
  }, [id]);

  const getFlows = async () => {
    const data = await API.findAllFlows();
    setId(`${data[0].id}`)
    setFlows(data);
  }

  const getFlowProcess = async () => {
    const data = await API.findFlowById(id);

    const flatArr: number[] = [];
    data.map((proc: any) => {
      flatArr.push(proc.fromProcessId, proc.toProcessId);
    })

    setProcessIds(flatArr);
  }

  return (
    <div className="duration-comparison">
      <Constrain>
        <FlowSelector flows={flows} handleChange={(e) => setId(e.target.value)} />
        {processIds?.map((item) => {
          return <p>{item}</p>
        })}
      </Constrain>
    </div>
  );
};
