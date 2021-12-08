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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StTicketGetTicket = styled.div`
  width: 400px;
  min-height: 160px;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 150px;
  border-radius: 10px;
  background: rgba(24, 27, 64, 0.6);
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
  font-size: 0.8rem;
  font-weight: 100;
  position: absolute;
  bottom: 0;
`;
