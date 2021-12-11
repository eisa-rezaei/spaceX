import React, { memo } from "react";
import { CgSmartphoneChip } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { StRocketFooterContainer, StRocketFooterLink } from "./style";

const Navigation = memo(({ RocketData, currentSite }) => {
  return (
    <StRocketFooterContainer>
      {RocketData &&
        Object.keys(RocketData).map((item, index) => (
          <NavLink key={item} to={`/${item.replaceAll(" ", "_")}`}>
            <StRocketFooterLink
              isSite={item.toLowerCase() === currentSite.toLowerCase()}
            >
              <CgSmartphoneChip />
              <h6>{item}</h6>
              <p>x{Object.values(RocketData)[index]} lunches</p>
            </StRocketFooterLink>
          </NavLink>
        ))}
    </StRocketFooterContainer>
  );
});

export default Navigation;
