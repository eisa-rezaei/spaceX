import styled from "styled-components";
import background from "assets/Background.webp";
import { device } from "components/screenSizeHelper";

export const StRocketPageContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  padding-top: 15px;
  color: #fff;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #26285c;
  background-image: url(${background});
  background-position: center;
  background-size: fill;
  @media ${device.tablet} {
    padding-top: 20px;
  }
  @media ${device.laptop} {
    padding-top: 35px;
  }
`;

export const StRocketPageBtns = styled.div`
  margin-bottom: 10px;
  & button {
    width: 80px;
    padding: 5px 0;
    color: #fff;
    cursor: pointer;
    font-size: 0.6rem;
    border: 1px solid #fff;
    transition: all 0.1s linear;
    ${(props) =>
      props.isUpComing === 1 ? "border-left:none;" : "border-right:none;"}
    border-radius: ${(props) =>
      props.isUpComing === 1 ? "0 6px 6px 0" : "6px 0 0 6px"};
    :nth-child(${(props) => props.isUpComing}) {
      width: 100px;
      padding: 10px 0;
      color: #222;
      background: #ffffff;
      border: none;
      border-radius: 6px;
      box-shadow: 0px 2px 56px rgba(0, 0, 0, 0.15);
    }
  }
  @media ${device.tablet} {
    height: 45px;
    margin: 15px 0;
    & button {
      font-size: 0.7rem;
      padding: 10px 0;
      :nth-child(${(props) => props.isUpComing}) {
        padding: 15px 0;
      }
    }
  }
`;

export const StRocketSearch = styled.div`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(26, 28, 72, 0.01);
  border: 1.5px solid rgba(148, 153, 195, 0.5);
  box-shadow: 0px 2px 56px rgba(0, 0, 0, 0.15),
    inset 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  & svg {
    color: rgba(255, 255, 255, 0.38);
  }
  & input {
    width: 90%;
    color: #fff;
    font-size: 0.7rem;
    background-color: inherit;
  }
`;

export const StRocketNextBeforeRocket = styled.div`
  width: 150px;
  height: 200px;
  ${(props) =>
    props.left
      ? "left: 0;transform: translate(-65%, -50%);padding-right:10px;"
      : "right: 0;transform: translate(65%, -50%);padding-left:10px;"}
  top: 50%;
  position: absolute;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  color: #000;
  align-items: center;
  justify-content: ${(props) => (props.left ? "right" : "left")};
  background-color: rgba(255, 255, 255, 0.08);
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;
