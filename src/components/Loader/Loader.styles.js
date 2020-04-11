import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -40px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #f60;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 2s linear infinite;
`;

export default LoaderIcon;
