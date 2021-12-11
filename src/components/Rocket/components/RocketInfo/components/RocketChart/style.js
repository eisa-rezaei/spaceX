import { device } from "components/screenSizes";
import styled from "styled-components";

export const StRocketInfoRocketChartsItem = styled.div`
  width: clamp(130px, 130px, 180px);
  height: 130px;
  padding-top: 10px;
  position: relative;
  font-size: 6px;
  font-weight: 400;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 100px;
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
