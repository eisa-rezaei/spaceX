import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
      border-top: 3px solid #4e4cd5;
    }
    100% {
      transform: rotate(360deg);
      border-top: 3px solid #4e4cd5;
    }
`;

export const StLoadingContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  background-color: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 2px solid #bbccbb;
    border-top: 3px solid #1a1c45;
    animation: ${rotation} infinite 1.5s ease;
  }
  & p {
    margin-top: 15px;
  }
`;
