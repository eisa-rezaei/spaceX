import styled from "styled-components";

export const StRocketTimeSearch = styled.div`
  width: 300px;
  height: 40px;
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;

  .abcd {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    border-radius: 20px;
    overflow: hidden;
    z-index: 4;
  }
  & input {
    border: none;
  }
`;
