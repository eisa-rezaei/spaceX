import styled, { css } from "styled-components";
import { device } from "components/screenSizeHelper";

const selectedSite = css`
  position: relative;
  & svg {
    color: #ff6a6a;
  }
  & p {
    color: #ffffffaa;
  }
  :after {
    content: "";
    width: 70%;
    height: 4px;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
`;

export const StRocketFooterContainer = styled.footer`
  width: clamp(375px, 100%, 700px);
  min-height: 80px;
  bottom: 0;
  left: clamp(0, 0, 50%);
  z-index: 5;
  display: flex;
  background: #1a1c48;
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
  min-height: 70px;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  & p {
    font-size: 0.5rem;
    color: #ffffff50;
  }
  & h6 {
    font-size: 0.65rem;
    font-weight: 500;
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
