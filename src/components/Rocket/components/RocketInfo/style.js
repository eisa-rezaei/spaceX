import { device } from "components/screenSizeHelper";
import styled from "styled-components";

export const StRocketInfoContainer = styled.section`
  width: clamp(380px, 100%, 700px);
  min-height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .range {
    background-color: #d3d3d3;
    ::-webkit-slider-thumb {
      max-width: 0;
      max-height: 0;
      visibility: hidden;
    }
    ::-ms-fill-lower {
      background-color: #d3d3d3;
    }
  }
`;

export const StRocketInfoRocketImg = styled.div`
  width: 230px;
  height: 40vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  ::after {
    content: "";
    width: 300px;
    height: 70px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #111 20%,
      rgba(0, 0, 0, 0) 100%
    );
    filter: blur(10px);
    position: absolute;
    border-radius: 40%;
    bottom: -20px;
    z-index: 1;
  }
  @media ${device.tablet} {
    & img {
      width: 100%;
      height: 120%;
    }
    ::after {
      bottom: -40px;
    }
  }
`;

export const StRocketInfoRocketChartsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    margin-bottom: 15px;
  }
`;

export const StRocketInfoRocketChartsItem = styled.div`
  width: clamp(130px, 130px, 180px);
  height: 130px;
  padding-top: 10px;
  position: relative;
  font-size: 10px;
  font-weight: 100;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 80px;
    text-align: center;
    :first-child {
      top: 35%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
    :last-child {
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      font-size: 0.7rem;
    }
  }
  :last-child {
    display: none;
  }
  @media ${device.mobileL} {
    width: 140px;
  }
  @media ${device.tablet} {
    :last-child {
      display: flex;
    }
  }
`;

export const StRocketInfoRocketLunchInfo = styled.div`
  width: clamp(28%, 30%, 35%);
  height: 180px;
  color: #fff;
  bottom: 50px;
  z-index: 2;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    height: 270px;
  }
`;
export const StRocketInfoRocketLunchInfoDPart = styled.div`
  width: 100%;
  & span {
    width: 100%;
    margin: 3px 0;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.right ? "right" : "space-between")};
    & :first-child {
      color: #9499c3;
    }
    & svg {
      margin-left: ${(props) => (props.right ? "10px" : "0")};
      color: #9499c3;
    }
    & p {
      text-transform: ${(props) => (props.right ? "uppercase" : "capitalize")};
    }
  }
  @media ${device.tablet} {
    & span {
      margin: 10px 0;
      font-size: ${(props) => (props.right ? "0.8rem" : "0.6rem")};
    }
  }
`;

export const StRocketInfoRocketLunchInfoChPart = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & span {
    width: 100%;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & input {
      width: 60%;
      height: 5px;
      background-color: #d3d3d3;
    }
  }
  @media ${device.tablet} {
    font-size: 0.65rem;
    & span {
      margin: 5px 0;
    }
  }
`;

export const StRocketInfoRocketID = styled.div`
  width: 100%;
  text-align: center;
  z-index: 2;
  font-size: 0.6rem;
  & span {
    color: #ff3333;
  }
  @media ${device.tablet} {
    margin-top: 30px;
  }
`;
