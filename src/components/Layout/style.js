import { device } from "components/screenSizes";
import styled, { createGlobalStyle } from "styled-components";

export const StLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before{
margin: 0;
padding: 0;
box-sizing: border-box;

}
body{
    user-select: none;
    line-height: 1;
    background-color: #14152c;
    font-family: 'Lato', sans-serif;

}
::-webkit-scrollbar {
  width: 0px;
}

li{
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
input{
    outline: none;
    border: none;
    line-height: 1;
    font-family: inherit;
}
button {
    background-color: inherit;
    border: none;
    line-height: 1;
    font-family: inherit;
}

@media ${device.tablet} {
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #000000; 
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 3px;
  :hover {
  background: #aaa; 
}
}
}
`;
