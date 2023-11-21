import styled, { keyframes } from 'styled-components';

const offset = 187;
const duration = '1.4s';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

export const dash = keyframes`
  0% {
    stroke-dashoffset: ${offset};
  }
  50% {
    stroke-dashoffset: ${offset / 4};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${offset};
    transform: rotate(450deg);
  }
`;

export const colors = keyframes`
  0% {
    stroke: #7400FF;
  }
  25%, 50%, 75%, 100% {
    stroke: #7400FF;
  }
`;

export const Spinner = styled.svg`
  &.spinner {
    animation: ${rotate} ${duration} linear infinite;
  }
`;

export const Path = styled.circle`
  &.path {
    stroke-dasharray: ${offset};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} ${duration} ease-in-out infinite, ${colors} ${duration} ease-in-out infinite;
  }
`;