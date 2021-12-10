import React, { memo } from "react";
import { CgSmartphoneChip } from "react-icons/cg";
import { StRocketFooterContainer, StRocketFooterLink } from "./style";

const RocketFooter = memo(({ RocketData, currentSite, setCurrentSite }) => {
  return (
    <StRocketFooterContainer>
      {RocketData &&
        Object.keys(RocketData)?.map((item, index) => (
          <StRocketFooterLink
            key={item}
            isSite={item === currentSite}
            onClick={() => setCurrentSite(item)}
          >
            <CgSmartphoneChip />
            <h6>{item}</h6>
            <p>x{Object.values(RocketData)[index]} lunches</p>
          </StRocketFooterLink>
        ))}
    </StRocketFooterContainer>
  );
});

export default RocketFooter;
