import './styles.scss';

import React from 'react';
import ReactFlow, {
  ReactFlowProvider,
  isNode,
  Controls,
} from 'react-flow-renderer';
import dagre from 'dagre';
import { CustomNode } from '../CustomNode/CustomNode';

/**
 * Component for duration info element.
 *
 * @component
 * @return {object} (
 *   <FlowChart handleChange={handleChange} />
 * )
 */
interface Props {
  nodes: object[],
  edges: object[]
}
export const FlowChart: React.FC<Props> = (props) => {
  const onLoad = (instance: any) => {
    console.log('I am here')
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
          elements={generateFlowchart(props.nodes, props.edges)}>
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
      console.log(el);
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