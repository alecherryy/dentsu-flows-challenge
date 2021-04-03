import './styles.scss';

import React, { useEffect, useState } from 'react';

import { API } from '../../services/FlowService';
import { Dropdown } from '../Dropdown/Dropdown';
import { UTILS } from '../../utils/utils';
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
    const nodeIDs: number[] = [];

    API.findFlowById(id).then(async (chart) => {
      const allEdges: object[] = [];

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
      const newProcesses: object[] = [];
      await Promise.all(nodeIDs.map(item => getNode(newProcesses, item)));
      setProcesses(newProcesses);
      setEdges(allEdges);
    })
  }, [id]);

  useEffect(() => {
    if (id === -1) {
      API.findAllFlows().then(async (data) => {
        setId(data[0].id);
        setFlows(data);
      });
    }
  }, []);

  const getNode = async (arr: object[], id: number) => {
    const node = await API.findProcessById(id);
    const newNode = {
      id: node.id.toString(),
      data: {
        label: node.name,
      }
    }
    arr.push(newNode);
  }

  return (
    <div className="data-overview">
      <Dropdown options={flows} handleChange={(e) => setId(parseInt(e.target.value))} />
      <FlowChart nodes={processes} edges={edges} />
    </div>
  );
};