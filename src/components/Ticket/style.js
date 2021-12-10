import { device } from "components/screenSizeHelper";
import styled from "styled-components";

export const StTicketContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  position: relative;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  & h3 {
    margin-bottom: 40px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${device.tablet} {
    & h3 {
      font-size: 2rem;
    }
    img {
      width: 80%;
      height: 80%;
      object-fit: cover;
    }
  }
`;

export const StTicketGetTicket = styled.div`
  width: 515px;
  min-height: 160px;
  padding: 25px;
  text-align: center;
  position: absolute;
  bottom: 150px;
  border-radius: 26px;
  background: rgba(24, 27, 64, 0.6);

  & h4 {
    font-weight: 400;
    font-size: 22px;
  }
  img {
    width: 300px;
    height: 150px;
    margin-top: 20px;
    margin-bottom: -100px;
    cursor: pointer;
  }
`;

export const StTicketFooter = styled.footer`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  bottom: 0;
`;
