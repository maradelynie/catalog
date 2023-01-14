import React from 'react';

import './style.css';

type rangeBarProps = {
  max: number;
  min: number;
  limit: number;
};

export default function RangeBar({ max, min, limit }: rangeBarProps) {
  const getPercentMaxSize = (max: number) => {
    return max / (limit / 100) - getPercentMminSize(min);
  };
  const getPercentMminSize = (min: number) => {
    return min / (limit / 100);
  };

  return (
    <div className="progressbar_container">
      <span
        data-testid={'rangeBar'}
        style={{
          left: getPercentMminSize(min) + '%',
          width: getPercentMaxSize(max) + '%'
        }}
      />
    </div>
  );
}
