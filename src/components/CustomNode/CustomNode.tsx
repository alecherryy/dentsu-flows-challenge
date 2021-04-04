import './styles.scss';

import React from 'react';

import { Handle, Position } from 'react-flow-renderer';

interface Props {
  data: any,
}
export const CustomNode: React.FC<Props> = (props) => {
  return (
    <div className="custom-node" data-outlier={props.data.outlier}>
      <Handle
        className="custom-node__handle"
        type="target"
        position={Position.Top}
      />
      <h5 className="custom-node__title">{props.data.label}</h5>
      <p>{props.data.description}</p>
      <p className="custom-node__dur"><span className="custom-node__label">Avg Duration:</span>
        {props.data.duration}</p>
      <Handle
        className="custom-node__handle"
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
};