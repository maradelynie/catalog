import React from 'react';
import styled from 'styled-components';

type FreeFormType = {
  type: number;
};

const FreeForm = styled.span<FreeFormType>`
  position: absolute;
  fill: var(--lightblue);
  height: 100vh;
  left: ${props => (props.type === 3 ? '' : '-60rem')};
  top: ${props =>
    props.type === 1 ? '-10rem' : props.type === 2 ? '10rem' : '0'};
  right: ${props => (props.type === 3 ? '-10rem' : '')};

  animation: ${props =>
    props.type === 1
      ? 'wave 30s -1s ease alternate infinite;'
      : 'wave 25s -1s ease-in-out alternate-reverse infinite;'};
`;

const BackgroundContainer = styled.div`
  opacity: 0.8;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  pointer-events: none;
`;

export default function Background() {
  return (
    <BackgroundContainer>
      <div>
        <FreeForm type={1}>
          <svg
            preserveAspectRatio="none"
            width="200%"
            height="200%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>Layer 1</title>
              <path
                transform="rotate(-180 321.05 767.397)"
                stroke="null"
                fill="undefined"
                opacity="NaN"
                d="m495.3614,236.16965c49.54805,32.12334 137.52447,198.9391 40.36654,264.31211c-97.15794,65.37301 14.8251,114.17416 -13.56034,307.99609c-28.38544,193.82193 102.04267,196.41299 30.36463,268.10299c-71.67803,71.69 87.66194,312.53386 87.66194,312.53386c0,0 1.90569,144.83277 1.90569,144.83277c0,0 -272.51428,1.90569 -272.51428,0c0,-1.90569 -133.3986,-314.43956 -139.11568,-327.77942c-5.71708,-13.33986 -325.87372,-112.43596 -202.0036,-735.598c123.87013,-623.16204 400.1958,-447.83816 400.1958,-447.83816c0,0 17.15125,181.31442 66.6993,213.43776z"
                id="svg_1"
                fillOpacity="0.1"
              />
            </g>
          </svg>
        </FreeForm>
        <FreeForm type={2}>
          <svg
            preserveAspectRatio="none"
            width="200%"
            height="200%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>Layer 1</title>
              <path
                transform="rotate(0 321.05 767.397)"
                stroke="null"
                fill="undefined"
                opacity="NaN"
                d="m495.3614,236.16965c49.54805,32.12334 137.52447,198.9391 40.36654,264.31211c-97.15794,65.37301 14.8251,114.17416 -13.56034,307.99609c-28.38544,193.82193 102.04267,196.41299 30.36463,268.10299c-71.67803,71.69 87.66194,312.53386 87.66194,312.53386c0,0 1.90569,144.83277 1.90569,144.83277c0,0 -272.51428,1.90569 -272.51428,0c0,-1.90569 -133.3986,-314.43956 -139.11568,-327.77942c-5.71708,-13.33986 -325.87372,-112.43596 -202.0036,-735.598c123.87013,-623.16204 400.1958,-447.83816 400.1958,-447.83816c0,0 17.15125,181.31442 66.6993,213.43776z"
                id="svg_1"
                fillOpacity="0.1"
              />
            </g>
          </svg>
        </FreeForm>
      </div>

      <FreeForm type={3}>
        <svg
          preserveAspectRatio="none"
          width="200%"
          height="200%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <title>Layer 1</title>
            <path
              transform="rotate(-180 321.05 767.397)"
              stroke="null"
              fill="undefined"
              opacity="NaN"
              d="m495.3614,236.16965c49.54805,32.12334 137.52447,198.9391 40.36654,264.31211c-97.15794,65.37301 14.8251,114.17416 -13.56034,307.99609c-28.38544,193.82193 102.04267,196.41299 30.36463,268.10299c-71.67803,71.69 87.66194,312.53386 87.66194,312.53386c0,0 1.90569,144.83277 1.90569,144.83277c0,0 -272.51428,1.90569 -272.51428,0c0,-1.90569 -133.3986,-314.43956 -139.11568,-327.77942c-5.71708,-13.33986 -325.87372,-112.43596 -202.0036,-735.598c123.87013,-623.16204 400.1958,-447.83816 400.1958,-447.83816c0,0 17.15125,181.31442 66.6993,213.43776z"
              id="svg_1"
              fillOpacity="0.1"
            />
          </g>
        </svg>
      </FreeForm>
      <FreeForm type={3}>
        <svg
          preserveAspectRatio="none"
          width="200%"
          height="200%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <title>Layer 1</title>
            <path
              transform="rotate(0 321.05 767.397)"
              stroke="null"
              fill="undefined"
              opacity="NaN"
              d="m495.3614,236.16965c49.54805,32.12334 137.52447,198.9391 40.36654,264.31211c-97.15794,65.37301 14.8251,114.17416 -13.56034,307.99609c-28.38544,193.82193 102.04267,196.41299 30.36463,268.10299c-71.67803,71.69 87.66194,312.53386 87.66194,312.53386c0,0 1.90569,144.83277 1.90569,144.83277c0,0 -272.51428,1.90569 -272.51428,0c0,-1.90569 -133.3986,-314.43956 -139.11568,-327.77942c-5.71708,-13.33986 -325.87372,-112.43596 -202.0036,-735.598c123.87013,-623.16204 400.1958,-447.83816 400.1958,-447.83816c0,0 17.15125,181.31442 66.6993,213.43776z"
              id="svg_1"
              fillOpacity="0.1"
            />
          </g>
        </svg>
      </FreeForm>
    </BackgroundContainer>
  );
}
