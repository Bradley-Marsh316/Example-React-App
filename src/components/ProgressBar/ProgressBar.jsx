import React from 'react';
import './ProgressBar.css';

export function ProgressBar({ percentage }) {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setWidth(percentage);
    }, 1);
  }, []);

  return (
    <div className="container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${width}%` }}></div>
      </div>
      <div className="value-container">{percentage.toFixed(2)}%</div>
    </div>
  );
}
