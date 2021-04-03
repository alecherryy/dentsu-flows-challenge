import './styles.scss';

import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import dagre from 'dagre';

import { API } from '../../services/FlowService';
import { Dropdown } from '../Dropdown/Dropdown';
import { UTILS } from '../../utils/utils';
import { FlowChart } from '../FlowChart/FlowChart2';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <DataOverview />
 * )
 */
export const DataOverview: React.FC = () => {
  const [flows, setFlows] = useState<any[] | undefined>(undefined);
  const [edges, setEdges] = useState<any[]>([]);
  const [nodes, setNodes] = useState<any[]>([]);
  const [id, setId] = useState(-1);

  useEffect(() => {
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
        return allEdges.push(edge);
      })
      const newNodes: object[] = [];
      await Promise.all(allIds.map(item => getNode(newNodes, item)));
      setNodes(newNodes);
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
    <div className="flow-chart">
      <Dropdown flows={flows} handleChange={(e) => setId(parseInt(e.target.value))} />
      <FlowChart nodes={nodes} edges={edges} />
    </div>
  );
};