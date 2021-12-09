import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import {
  StRocketInfoRange,
  StRocketInfoRangeAnimatedContainer,
  StRocketInfoRangeAnimateNumber,
  StRocketInfoRangeContainer,
} from "./style";

const RocketInfoRange = ({ rangeValue, title, maxValue }) => {
  return (
    <StRocketInfoRangeContainer>
      <p>{title}</p>
      <StRocketInfoRangeAnimatedContainer>
        <StRocketInfoRange value={rangeValue} max={maxValue} />
        <StRocketInfoRangeAnimateNumber>
          <AnimatedNumbers
            includeComma
            animateToNumber={
              rangeValue > 10 ? rangeValue.toFixed(0) : rangeValue
            }
            fontStyle={{ fontSize: 6 }}
            configs={[
              { mass: 1, tension: 210, friction: 30 },
              { mass: 1, tension: 180, friction: 30 },
              { mass: 1, tension: 160, friction: 30 },
              { mass: 1, tension: 140, friction: 30 },
              { mass: 1, tension: 120, friction: 30 },
            ]}
          />
          {rangeValue > 10 ? <p>&nbsp;km</p> : null}
        </StRocketInfoRangeAnimateNumber>
      </StRocketInfoRangeAnimatedContainer>
    </StRocketInfoRangeContainer>
  );
};

export default RocketInfoRange;
