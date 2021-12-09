import styled from "styled-components";
import { device } from "components/screenSizeHelper";

export const StRocketInfoRangeContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 0.65rem;
`;
export const StRocketInfoRangeAnimatedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & p {
    font-size: 12px;
  }
  @media ${device.tablet} {
    margin: 5px 0;
  }
`;

export const StRocketInfoRangeAnimateNumber = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StRocketInfoRange = styled.div`
  width: 65%;
  height: 6px;
  background-color: rgba(148, 153, 195, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  ::before {
    content: "";
    min-width: ${(props) =>
      props ? `${(props.value * 100) / props.max}%` : "0%"};
    left: 0;
    min-height: 6px;
    position: absolute;
    border-radius: 10px;
    transition: all 0.3s ease;
    background-color: #298bfe;
  }
`;
