import styled from "styled-components";
import background from "assets/Background.webp";
import { device } from "components/screenSizes";

export const StRocketPageContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${background});
  background-position: center;
  background-size: fill;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    border-bottom: 10px solid #1a1c45;
  }
  @media ${device.desktopL} {
    background-size: cover;
  }
`;

export const StRocketPageTitleBox = styled.div`
  width: 620px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  & h1 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    & h1 {
      font-size: 2rem;
    }
  }
`;

export const StRocketPageBtns = styled.div`
  width: 100%;
  min-height: 70px;
  text-align: center;
  margin: 15px 0;
  & button {
    width: 120px;
    height: 55px;
    color: #fff;
    cursor: pointer;
    font-size: 0.6rem;
    border: 1.5px solid rgba(148, 153, 195, 0.5);
    transition: all 0.15s linear;
    ${(props) =>
      props.isUpComing === 1 ? "border-left:none;" : "border-right:none;"}
    border-radius: ${(props) =>
      props.isUpComing === 1 ? "0 6px 6px 0" : "6px 0 0 6px"};
    :nth-child(${(props) => props.isUpComing}) {
      width: 130px;
      height: 70px;
      color: #222;
      background: #ffffff;
      border: none;
      border-radius: 6px;
      box-shadow: 0px 2px 56px rgba(0, 0, 0, 0.15);
    }
  }
  @media ${device.tablet} {
    & button {
      font-size: 16px;
    }
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
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.left ? "right" : "left")};
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.2s linear;
  display: ${(props) => (props.shouldShow ? "flex" : "none")};
  :hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    ${(props) =>
      props.left
        ? "left: 0;transform: translate(-55%, -50%);padding-right:20px;"
        : "right: 0;transform: translate(55%, -50%);padding-left:20px;"}
  }
`;
