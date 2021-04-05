import './styles.scss';

import React, { useEffect, useState } from 'react';

import { API } from '../../services/FlowService';
import { UTILS } from '../../utils/utils';

import { Dropdown } from '../Dropdown/Dropdown';
import { FlowChart } from '../FlowChart/FlowChart';
import { Legend } from '../Legend/Legend';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <DataOverview />
 * )
 */
export const DataOverview: React.FC = () => {
  const [flowIDs, setFlowIDs] = useState<any[]>([]);
  const [processes, setProcesses] = useState<any[]>([]);
  const [flows, setEdges] = useState<any[]>([]);
  const [id, setId] = useState(-1);

  // call everytime the ID is upated
  useEffect(() => {
    if (id === -1) {
      API.findAllFlows().then(async (data) => {
        setFlowIDs(data);
        setId(data[0].id);
      });
    }
    // temp arrays to hold fetched data
    const processIDs: number[] = [];
    const allFlows: any[] = [];
    // const newProcesses: any[] = [];

    // get array of flows for a given ID
    API.findFlowById(id).then(async (chart) => {

      chart.forEach((el: any, index: number) => {
        // add process IDs to array, no duplicates values
        UTILS.createArrayOfUniqueValues(processIDs, el.fromProcessId);
        UTILS.createArrayOfUniqueValues(processIDs, el.toProcessId);

        const flow = UTILS.formatFlowObj(index, el);

        // add individual flow to the array
        allFlows.push(flow);
      })
      setEdges(allFlows);
      setProcesses(processIDs);
    })
  }, [id]);

  return (
    <div className="data-overview">
      <Dropdown options={flowIDs} handleChange={(e) => setId(parseInt(e.target.value))} />
      <Legend />
      <FlowChart nodes={processes} edges={flows} />
    </div>
  );
};