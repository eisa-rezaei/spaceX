import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle, StLayoutContainer } from "./style";

const Layout = ({ children }) => {
  return (
    <StLayoutContainer>
      {children}
      <GlobalStyle />
    </StLayoutContainer>
  );
};
Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Layout;
