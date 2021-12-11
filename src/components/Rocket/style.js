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

export const StRocketSearch = styled.div`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 15px auto;
  position: relative;
  border-radius: 12px;
  display: flex;
  align-items: center;
  transition: all 0.2s linear;
  justify-content: space-between;
  background: rgba(26, 28, 72, 0.01);
  border: 1.5px solid rgba(148, 153, 195, 0.5);
  box-shadow: 0px 2px 56px rgba(0, 0, 0, 0.15),
    inset 0px 0px 50px rgba(0, 0, 0, 0.2);
  & svg {
    color: rgba(255, 255, 255, 0.38);
  }
  & input {
    width: 90%;
    color: #fff;
    font-size: 0.7rem;
    background-color: inherit;
  }
  :hover {
    cursor: pointer;
    box-shadow: 0px 5px 10px #ffffff40;
    border: 1.5px solid #ffffffa0;
    & svg {
      color: #ffffffa0;
    }
    & input {
      ::placeholder {
        color: #ffffffa0;
      }
    }
  }
`;

export const StRocketSearchResults = styled.ul`
  width: 100%;
  min-height: ${(props) => (props.shouldShow ? "auto" : "0")};
  visibility: ${(props) => (props.shouldShow ? "visible" : "hidden")};
  left: 0;
  top: 38px;
  z-index: 2;
  position: absolute;
  overflow: hidden;
  background-color: #0f1022;
  border-radius: 0 0 10px 10px;
  transition: height 1s linear;
  border: 1px solid rgba(148, 153, 195, 0.5);
  border-top: 1px solid #1a1c48fa;
`;
export const StRocketSearchResultsItem = styled.li`
  width: 100%;
  padding: 10px;
  border: 1.5px solid #1a1c48fa;
  border-bottom: none;

  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background-color: #3a3c68;
    border-left: 1.5px solid #fff;
    border-right: 1.5px solid #fff;
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
