import './styles.scss';

import React, { useEffect, useState } from 'react';

import { API } from '../../services/FlowService';
import { UTILS } from '../../utils/utils';

import { Dropdown } from '../Dropdown/Dropdown';
import { FlowChart } from '../FlowChart/FlowChart';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <DataOverview />
 * )
 */
export const DataOverview: React.FC = () => {
  const [flows, setFlows] = useState<any[]>([]);
  const [processes, setProcesses] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);
  const [id, setId] = useState(-1);

  useEffect(() => {
    // temp arrays to hold fetched data
    const nodeIDs: number[] = [];
    const allEdges: any[] = [];
    const newProcesses: any[] = [];

    API.findFlowById(id).then(async (chart) => {

      chart.map((el: any, index: number) => {
        if (!nodeIDs.includes(el.fromProcessId)) {
          nodeIDs.push(el.fromProcessId);
        }
        if (!nodeIDs.includes(el.toProcessId)) {
          nodeIDs.push(el.toProcessId);
        }

        const edge = UTILS.formatObj(index, el);
        return allEdges.push(edge);
      })
      await Promise.all(nodeIDs.map(item => getNode(newProcesses, item)));

      const max = UTILS.findMax(newProcesses);
      const highest = newProcesses.filter(process => process.data.duration === max);
      highest.map(el => el.data.outlier = 'MAX')
      const min = UTILS.findMin(newProcesses);
      const lowest = newProcesses.filter(process => process.data.duration === min);
      lowest.map(el => el.data.outlier = 'MIN')

      // set state variables
      setProcesses(newProcesses);
      setEdges(allEdges);
    })
  }, [id]);

  // on first render, call all flows and set a default
  // value for the ID
  useEffect(() => {
    if (id === -1) {
      API.findAllFlows().then(async (data) => {
        setFlows(data);
        setId(data[0].id);
      });
    }
  });

  const getNode = async (arr: object[], id: number) => {
    const node = await API.findProcessById(id);
    const newNode = {
      id: node.id.toString(),
      data: {
        label: node.name,
        description: node.description,
        duration: node.avgDuration,
      },
    }
    // push new node to param arr
    arr.push(newNode);
  }

  return (
    <div className="data-overview">
      <Dropdown options={flows} handleChange={(e) => setId(parseInt(e.target.value))} />
      <FlowChart nodes={processes} edges={edges} />
    </div>
  );
};