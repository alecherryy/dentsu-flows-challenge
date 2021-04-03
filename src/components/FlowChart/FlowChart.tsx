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
        <ReactFlow elements={generateFlow(props.nodes, props.edges)} />
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
 */
const NODE_WIDTH = 200;
const NODE_HEIGHT = 50;
const generateFlow = (nodes: object[], edges: object[]) => {
  const elements: any[] = nodes.concat(edges);

  elements.map((el: any) => {
    if (isNode(el)) {
      Graph.setNode(el.id, {
        id: el.id,
        data: el.data,
        width: NODE_WIDTH,
        height: NODE_HEIGHT
      });
    } else {
      Graph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(Graph);

  // layout out elements on page
  elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = Graph.node(el.id);
      el.position = {
        x: nodeWithPosition.x - NODE_WIDTH / 2,
        y: nodeWithPosition.y - NODE_HEIGHT / 2,
      };
    }
    return el;
  });

  return [...elements];
};