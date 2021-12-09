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
              rangeValue > 10 ? rangeValue.toFixed(0) : rangeValue.toFixed(5)
            }
            fontStyle={{ fontSize: 12 }}
            configs={[
              { mass: 1, tension: 300, friction: 40 },
              { mass: 1, tension: 280, friction: 60 },
              { mass: 1, tension: 260, friction: 80 },
              { mass: 1, tension: 280, friction: 60 },
              { mass: 1, tension: 300, friction: 40 },
            ]}
          />
          {rangeValue > 10 ? <p>&nbsp;km</p> : null}
        </StRocketInfoRangeAnimateNumber>
      </StRocketInfoRangeAnimatedContainer>
    </StRocketInfoRangeContainer>
  );
};

export default RocketInfoRange;
