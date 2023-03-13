import React from 'react';
import classnames from 'classnames';
import './Delta.css';

export function Delta({ value }) {
  const isPositive = value > 0;
  return (
    <div
      className={classnames(
        'delta',
        'delta-green',
        !isPositive ? 'delta-red' : ''
      )}
    >
      {isPositive ? <span>&and;</span> : <span>&or;</span>}
      {value.toFixed(2)}%
    </div>
  );
}
