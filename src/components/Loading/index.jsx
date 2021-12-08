import React from "react";
import gif from "./demo.mp4";
import { StLoadingContainer } from "./style";

const Loading = () => {
  return (
    <StLoadingContainer>
      <video src={gif} width="150px" height="150px" autoPlay loop></video>
    </StLoadingContainer>
  );
};

export default Loading;
