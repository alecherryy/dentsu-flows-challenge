import './styles.scss';

import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
// import dagre from 'dagre';

import { API } from '../../services/FlowService';
import { Dropdown } from '../Dropdown/Dropdown';
import { UTILS } from '../../utils/utils';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <FlowChart handleChange={handleChange} />
 * )
 */
export const FlowChart: React.FC = () => {
  const [flows, setFlows] = useState<any[] | undefined>(undefined);
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState(-1);

  useEffect(() => {
    API.findAllFlows().then(async (data) => {
      if (id === -1) {
        setId(data[0].id);
        setFlows(data);
      }

      API.findFlowById(id).then(async (chart) => {
        const allIds: number[] = [];
        const allEdges: object[] = [];
        chart.map((el: any, index: number) => {
          if (!allIds.includes(el.fromProcessId)) {
            allIds.push(el.fromProcessId);
          }
          if (!allIds.includes(el.toProcessId)) {
            allIds.push(el.toProcessId);
          }

          const edge = UTILS.formatObj(index, el);
          allEdges.push(edge);
        })

        const allNodes: object[] = await Promise.all(allIds.map(item => getNode(item)));

        setData(allNodes.concat(allEdges));
      })
    });
  }, [id]);

  const getNode = async (id: number) => {
    const node = await API.findProcessById(id);
    const newNode = {
      id: node.id.toString(),
      data: { label: node.name },
      position: { x: 50 + (id * 100), y: 25 + (id * 100) },
    }
    return newNode;
  }

  return (
    <div className="flow-chart">
      <Dropdown flows={flows} handleChange={(e) => setId(parseInt(e.target.value))} />
      <ReactFlow elements={data} />
    </div>
  );
};
