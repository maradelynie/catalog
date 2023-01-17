import React, { useRef } from 'react';
import styled from 'styled-components';

type rangeBarProps = {
  max: number;
  min: number;
  limit: number;
  setMax: (value: number) => void;
  setMin: (value: number) => void;
};

type ProgressbarContainerProps = {
  max: number;
  min: number;
};

const ProgressbarContainer = styled.div<ProgressbarContainerProps>`
  position: relative;
  width: 100%;
  background-color: var(--midgrey);
  display: block;
  height: 0.4rem;
  margin: 1rem 0;
  border-radius: 0.2rem;
  cursor: pointer;

  span {
    position: absolute;
    background-color: var(--lightblue);
    height: 0.4rem;
    display: block;
    pointer-events: none;
    transition: all 0.3s;

    left: ${props => props.min + '%'};
    width: ${props => props.max + '%'};
  }
  span::after {
    background-color: var(--lightblue);
    display: block;
    content: '';
    position: absolute;
    right: -0.1rem;
    top: -0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
  }
  span::before {
    background-color: var(--lightblue);
    display: block;
    content: '';
    position: absolute;
    left: -0.1rem;
    top: -0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
  }

  @media screen and (max-width: 800px) {
    span::after {
      top: -0.3rem;
      width: 1rem;
      height: 1rem;
    }
    span::before {
      top: -0.3rem;
      width: 1rem;
      height: 1rem;
    }
  }
  @media screen and (max-width: 400px) {
    .productspage_productlist {
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
`;

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
    <ProgressbarContainer
      ref={barEl}
      className="progressbar_container"
      onMouseUp={e => handleSlider(e)}
      min={getPercentMminSize(min)}
      max={getPercentMaxSize(max)}
    >
      <span data-testid={'rangeBar'} />
    </ProgressbarContainer>
  );
}
