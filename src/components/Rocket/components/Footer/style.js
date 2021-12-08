import styled, { css } from "styled-components";
import { device } from "components/screenSizeHelper";

const selectedSite = css`
  position: relative;
  & svg {
    color: #ff6a6a;
  }
  & p {
    color: #ffffffa0;
  }
  :after {
    content: "";
    width: 70%;
    height: 2px;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StRocketFooterContainer = styled.footer`
  width: clamp(375px, 100%, 700px);
  bottom: 0;
  left: clamp(0, 0, 50%);
  z-index: 2;
  display: flex;
  background: #1a1c48;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  @media ${device.tablet} {
    padding: 0 80px;
    clip-path: polygon(10% 0, 90% 0%, 100% 100%, 0% 100%);
  }
`;

export const StRocketFooterLink = styled.footer`
  width: 120px;
  min-height: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2px;

  & p {
    font-size: 0.5rem;
    color: #ffffff50;
  }
  & h6 {
    font-size: 0.65rem;
    font-weight: 100;
  }
  & svg {
    font-size: 1.4rem;
  }
  ${(props) => props.isSite && selectedSite}

  @media ${device.tablet} {
    padding: 5px;
    & p {
      font-size: 0.6rem;
    }
    & h6 {
      font-size: 0.75rem;
    }
    & svg {
      font-size: 1.5rem;
    }
  }
`;
