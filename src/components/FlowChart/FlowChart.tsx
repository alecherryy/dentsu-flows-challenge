import './styles.scss';

import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
// import dagre from 'dagre';

import { API } from '../../services/FlowService';
import { FlowSelector } from '../FlowSelector/FlowSelector';
import { UTILS } from '../../utils/utils';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <FlowChart handleChange={handleChange} />
 * )
 */
// const elements: any[] = [
//   {
//     id: '1',
//     data: { label: '1' },
//     position: { x: 250, y: 25 },
//   },
// ];
export const FlowChart: React.FC = () => {
  const [flows, setFlows] = useState<any[] | undefined>(undefined);
  const [chart, setChart] = useState<any[] | undefined>(undefined);
  const [nodes, setNodes] = useState<any[]>([]);
  const [nodeIds, setNodeIds] = useState<number[]>([]);
  const [edges, setEdges] = useState<object[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState('-1');

  useEffect(() => {

    if (id ===  '-1') {
      getAllFlows();
    } else {

    }
    console.log(id);
  }, [id, nodes, edges, data, flows, nodeIds]);

  const getFlowChart = async () => {
    const flowChart = await API.findFlowById(id);

    setChart(flowChart);
  }

  const getNodeIds = () => {
    const allIds: number[] = [];
    const allEdges: object[] = [];

    chart?.map((el: any, index: number) => {
      if (!allIds.includes(el.fromProcessId)) {
        allIds.push(el.fromProcessId);
      }
      if (!allIds.includes(el.toProcessId)) {
        allIds.push(el.toProcessId);
      }

      const edge = UTILS.formatObj(index, el);
      allEdges.push(edge);
    })

    setEdges(allEdges);
    setNodeIds(allIds);
  }

  const getNode = async (id: number) => {
    const node = await API.findProcessById(id);
    const newNode = {
      id: node.id.toString(),
      data: { label: node.name },
      position: { x: 50 + (id * 100), y: 25 + (id * 100) },
    }
    return newNode;
  }

  const getNodes = async (arr: number[]) => {
    const allNodes: object[] = await Promise.all(arr.map(item => getNode(item)));

    setNodes(allNodes);
  }

  const getAllFlows = async () => {
    const data = await API.findAllFlows();

    setFlows(data);
  }

  return (
    <div className="flow-chart">
      <FlowSelector flows={flows} handleChange={(e) => setId(e.target.value)} />
      {data && <ReactFlow elements={data} />}
    </div>
  );
};
