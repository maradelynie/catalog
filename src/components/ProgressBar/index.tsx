import React, { useRef } from 'react';

import './style.css';

type rangeBarProps = {
  max: number;
  min: number;
  limit: number;
  setMax: (value: number) => void;
  setMin: (value: number) => void;
};

export default function RangeBar({
  max,
  min,
  limit,
  setMax,
  setMin
}: rangeBarProps) {
  const barEl = useRef<null | HTMLParagraphElement>(null);

  const getPercentMaxSize = (max: number) => {
    return max / (limit / 100) - getPercentMminSize(min);
  };
  const getPercentMminSize = (min: number) => {
    return min / (limit / 100);
  };
  const handleSlider = (e: React.MouseEvent) => {
    const elementPercent =
      (e.nativeEvent.offsetX * 100) / (barEl.current?.clientWidth || 1);

    const persentLimit = (elementPercent * limit) / 100;

    if (Math.abs(max - persentLimit) > Math.abs(min - persentLimit)) {
      setMin(Math.round(+persentLimit));
    } else {
      setMax(Math.round(+persentLimit));
    }
  };

  return (
    <div
      ref={barEl}
      className="progressbar_container"
      onMouseUp={e => handleSlider(e)}
    >
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
