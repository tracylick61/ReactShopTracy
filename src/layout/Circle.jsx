
import React from 'react';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`;

const CircleStyles = css`
  animation: ${rotate} 2s linear infinite;
  height: 50px;
  left: 50%;
  position: absolute;
  top: 50%;
  transition: all 0.2s ease;
  transform: translate(-50%, -50%) rotate(360deg);
  width: 50px;
  z-index: 4;
  
  .path {
    stroke-dasharray: 1, 500;
    stroke-dashoffset: 0;
    animation: ${dash} 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
`;

const Circle = ({ className, color }) => (
  <svg className={className} height="50" width="50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      stroke={color}
      fill="none"
      strokeWidth="2.5"
      strokeMiterlimit="10"
    />
  </svg>
);

const StyledCircle = styled(Circle)`
  ${CircleStyles}
`;

export default StyledCircle;
