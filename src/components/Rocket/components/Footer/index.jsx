import React from "react";
import { CgSmartphoneChip } from "react-icons/cg";
import { StRocketFooterContainer, StRocketFooterLink } from "./style";

const RocketFooter = ({ RocketData, currentSite, setCurrentSite }) => {
  return (
    <StRocketFooterContainer>
      {RocketData?.map((item) => (
        <StRocketFooterLink
          key={item}
          isSite={item === currentSite}
          onClick={() => setCurrentSite(item)}
        >
          <CgSmartphoneChip />
          <h6>{item}</h6>
          <p>x24 lunches</p>
        </StRocketFooterLink>
      ))}
    </StRocketFooterContainer>
  );
};

export default RocketFooter;
