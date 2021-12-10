import styled from "styled-components";
import { device } from "components/screenSizeHelper";

export const StRocketInfoContainer = styled.section`
  width: clamp(380px, 100%, 700px);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StRocketInfoRocketImg = styled.div`
  position: relative;
  & img {
    width: 250px;
    height: 380px;
    z-index: 2;
    position: relative;
  }
  ::after {
    content: "";
    width: 300px;
    height: 70px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #000022 22%,
      rgba(0, 0, 0, 0) 100%
    );
    background-color: #ffffff20;
    mix-blend-mode: overlay;
    filter: blur(15px);
    position: absolute;
    border-radius: 40%;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media ${device.tablet} {
    & img {
      width: 250px;
      height: 400px;
    }
  }
`;

export const StRocketInfoInfoContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.tablet} {
    position: absolute;
    bottom: 140px;
    height: 300px;
    justify-content: space-between;
  }
`;

export const StRocketInfoRocketChartsContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: flex-start;
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
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      font-size: 0.6rem;
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
  width: 150px;
  min-height: 220px;
  color: #fff;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 200px;
    height: 300px;
  }
`;
export const StRocketInfoRocketLunchInfoDPart = styled.div`
  width: 100%;
  & span {
    width: 100%;
    margin: 5px 0;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.right ? "right" : "space-between")};
    & :first-child {
      color: #9499c3;
    }
    & svg {
      font-size: 1rem;
      margin-left: 10px;
      color: #9499c3;
    }
    & p {
      text-transform: ${(props) => (props.right ? "uppercase" : "capitalize")};
      :last-child {
        width: 80px;
        text-align: left;
      }
    }
  }
  @media ${device.tablet} {
    & span {
      margin-bottom: ${(props) => (props.right ? "15px" : "10px")};
      font-size: ${(props) => (props.right ? "0.8rem" : "0.6rem")};
    }
  }
`;

export const StRocketInfoRocketLunchInfoChPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StRocketInfoRocketID = styled.div`
  width: 100%;
  min-height: 50px;
  margin-top: 20px;
  text-align: center;
  z-index: 2;
  font-size: 0.6rem;
  & span {
    color: #ff3333;
  }
`;
