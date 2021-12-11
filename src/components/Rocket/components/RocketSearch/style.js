import styled from "styled-components";

export const StRocketSearch = styled.div`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 15px auto;
  position: relative;
  border-radius: 12px;
  z-index: 3;
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
  .calendar-toggle-icon {
    width: 50px;
    transition: all 0.2s ease;
    position: absolute;
    font-size: 1.2rem;
    opacity: 0;
    left: 10px;
    display: block;
    z-index: 1;
    cursor: pointer;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0px 5px 10px #ffffff40;
    border: 1.5px solid #ffffffa0;
    & svg {
      color: #ffffffa0;
    }
    .calendar-toggle-icon {
      opacity: 1;
      left: -50px;
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
