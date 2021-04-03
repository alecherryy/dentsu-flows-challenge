import './styles.scss';

import React, { useEffect, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  isNode,
  isEdge
} from 'react-flow-renderer';
import dagre from 'dagre';

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
  nodes: object[],
  edges: object[]
}
export const FlowChart: React.FC<Props> = (props) => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    setElements(generateFlow(props.nodes, props.edges))
    // console.log(elements);
  }, []);
  return (
    <div className="flow-chart">
      <ReactFlowProvider>
        <ReactFlow elements={generateFlow(props.nodes, props.edges)} />
      </ReactFlowProvider>
    </div>
  );
};


const NODE_WIDTH = 200;
const NODE_HEIGHT = 50;

const Graph = new dagre.graphlib.Graph();
Graph.setGraph({
  rankdir: 'TB',
  ranker: 'tight-tree'
});
Graph.setDefaultEdgeLabel(() => ({}));

const generateFlow = (nodes: object[], edges: object[]) => {
  // console.log(nodes);
  // nodes.map((i: any) => {
  //   return {
  //     id: i.id,
  //     label: i.label,

  //   };
  // });

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

  console.log(elements);

  // nodes.forEach((e: any) =>  {
  //   Graph.setNode(e.id, {
  //     id: e.id,
  //     label: e.label,
  //     width: NODE_WIDTH,
  //     height: NODE_HEIGHT,
  //   });
  // });

  // Graph.setEdge('1', '2');
  // edges.forEach((e: any) => {
  //   Graph.setEdge(e.source, e.target);
  //   nodes.push(e);
  // });

  dagre.layout(Graph);
  elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = Graph.node(el.id);
      // el.targetPosition = isHorizontal ? 'left' : 'top';
      // el.sourcePosition = isHorizontal ? 'right' : 'bottom';

      // unfortunately we need this little hack to pass a slighltiy different position
      // to notify react flow about the change. More over we are shifting the dagre node position
      // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
      el.position = {
        x: nodeWithPosition.x - NODE_WIDTH / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - NODE_HEIGHT / 2,
      };
    }

    return el;
  });
  // const nodesFormatted = Graph.nodes().map((i: any) => {
  //   let n = Graph.node(i);
  //   return {
  //     id: i,
  //     data: {
  //       label: n.label
  //     },
  //     width: n.width,
  //     height: n.height,
  //     position: {
  //       x: n.x - n.width / 2,
  //       y: n.y - n.height / 2
  //     },
  //   };
  // });

  return [...elements];
};