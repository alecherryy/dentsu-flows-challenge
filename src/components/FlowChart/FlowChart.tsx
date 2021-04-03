import './styles.scss';

import React from 'react';
import ReactFlow, {
  ReactFlowProvider,
  isNode,
} from 'react-flow-renderer';
import dagre from 'dagre';

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
  return (
    <div className="flow-chart">
      <ReactFlowProvider>
        <ReactFlow
          zoomOnScroll={false}
          elements={generateFlow(props.nodes, props.edges)}
        />
      </ReactFlowProvider>
    </div>
  );
};

/**
 * Create a new Dagre Graph and set direction and
 * type of layout algorithm=.
 */
const Graph = new dagre.graphlib.Graph();
Graph.setGraph({
  rankdir: 'TB',
  ranker: 'longest-path'
});
Graph.setDefaultEdgeLabel(() => ({}));

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
const NODE_WIDTH = 200;
const NODE_HEIGHT = 50;
const generateFlow = (nodes: object[], edges: object[]) => {
  const elements: any[] = nodes.concat(edges);

  // format elements to match library requirements
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
      const nodeWithPosition = Graph.node(el.id);
      // update position coordinates of the node
      el.position = {
        x: nodeWithPosition.x - NODE_WIDTH / 2,
        y: nodeWithPosition.y - NODE_HEIGHT / 2,
      };
    }

    return el;
  });

  return [...elements];
};