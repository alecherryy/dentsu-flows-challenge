import './styles.scss';

import React, { useEffect, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  isNode,
  Controls,
} from 'react-flow-renderer';
import dagre from 'dagre';
import { CustomNode } from '../CustomNode/CustomNode';
import { UTILS } from '../../utils/utils';
import { API } from '../../services/FlowService';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <FlowChart handleChange={handleChange} />
 * )
 */
interface Props {
  nodes: number[],
  edges: object[]
}
export const FlowChart: React.FC<Props> = (props) => {
  const [nodes , setNodes] = useState<any[]>([]);
  const [elements, setElements] = useState<any[]>([]);

  // set elements once nodes are updated
  useEffect(() => {
    setElements(generateFlowchart(nodes, props.edges))
  }, [nodes]);

  useEffect(() => {
    getNodes();
  }, [props.nodes]);


  // get nodes to be rendered
  const getNodes = async () => {
    const nodes: any[] = [];

    await Promise.all(props.nodes.map(item => getSingleNode(nodes, item)));

    // find highest avg duration
    const max = UTILS.findMax(nodes);
    const highest = nodes.filter(node => node.data.duration === max);
    highest.map(el => el.data.outlier = 'MAX')
    // find lowest avg duration
    const min = UTILS.findMin(nodes);
    const lowest = nodes.filter(node => node.data.duration === min);
    lowest.map(el => el.data.outlier = 'MIN')

    // set state variables
    setNodes(nodes);
  };

  // call API of each node and retrieve data
  const getSingleNode = async (arr: object[], id: number) => {
    const node = await API.findProcessById(id);
    // format data into node
    const newNode = UTILS.formatProcessObj(node);
    // push new node to external arr
    arr.push(newNode);
  }

  const onLoad = (instance: any) => {
    instance.fitView();
  }

  // set custom node to be default node
  const specialNodeTypes = {
    default: CustomNode,
  };

  return (
    <div className="flow-chart">
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={specialNodeTypes}
          onLoad={onLoad}
          zoomOnScroll={false}
          elements={elements}>
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

/**
 * Call this function to generate a new Dagre Graph.
 *
 * @function
 * @return {Object} new Dagre Graph
 */
const generateGraph = () => {
  // instantiate new dagre graph
  const Graph = new dagre.graphlib.Graph();
  // hard coded direction and layout agorithm
  Graph.setGraph({
    rankdir: 'TB',
    ranker: 'longest-path', // additional options: network-simplex and tight-tree
  });
  Graph.setDefaultEdgeLabel(() => ({}));

  return Graph;
}

/**
 * Create a new Dagre Graph and set direction and
 * type of layout algorithm.
 *
 * @function
 * @param {arr} nodes of the graph
 * @param {arr} edges of the graph
 * @return {arr} containing preformatted nodes and edges objects
 */
// CONSTANTS
const generateFlowchart = (nodes: object[], edges: object[]) => {
  const NODE_WIDTH = 315;
  const NODE_HEIGHT = 140;
  // create new graph
  const Graph = generateGraph();
  // combine nodes and edges into a single array
  const elements: any[] = nodes.concat(edges);

  // format nodes and set nodes on the graph
  elements.forEach((el: any) => {
    if (isNode(el)) {
      // add a node to the graph
      Graph.setNode(el.id, {
        id: el.id,
        data: el.data,
        width: NODE_WIDTH,
        height: NODE_HEIGHT
      });
    } else {
      // add an edge to the graph
      Graph.setEdge(el.source, el.target);
    }
  });

  // instantiate layout
  dagre.layout(Graph);

  // layout out elements on page
  elements.map((el) => {
    if (isNode(el)) {
      const nodeCoordinates = Graph.node(el.id);
      // update position coordinates of the node
      // using hard coded width and height for time purposes
      el.position = {
        x: nodeCoordinates.x - NODE_WIDTH / 2,
        y: nodeCoordinates.y - NODE_HEIGHT / 2,
      };
    }

    return el;
  });

  return [...elements];
};