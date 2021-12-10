import React, { memo } from "react";
import rocketImg from "assets/falcon.webp";
import { BsFillCircleFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

import RocketInfoRange from "./components/RocketInfoRange";
import RocketChart from "./components/RocketChart";

import {
  StRocketInfoContainer,
  StRocketInfoInfoContainer,
  StRocketInfoRocketChartsContainer,
  StRocketInfoRocketID,
  StRocketInfoRocketImg,
  StRocketInfoRocketLunchInfo,
  StRocketInfoRocketLunchInfoChPart,
  StRocketInfoRocketLunchInfoDPart,
} from "./style";

const RocketInfo = memo(({ data }) => {
  const rocketData = data?.rocket.second_stage.payloads[0];
  const landingData = data?.rocket.first_stage.cores[0];
  const orbitParams = rocketData?.orbit_params;
  return (
    <StRocketInfoContainer>
      <StRocketInfoRocketChartsContainer>
        <RocketChart
          title="INCLINATION DEG"
          chartParameter="deg"
          chartData={orbitParams?.inclination_deg?.toFixed(2)}
          chartColor="#11aa11"
          chartMaxValue={100}
        />
        <RocketChart
          title="PERIOD MIN"
          chartParameter="days"
          chartData={orbitParams?.period_min?.toFixed(2)}
          chartColor="#ff1100"
          chartMaxValue={2000}
        />
        <RocketChart
          title="MEAN MOTION"
          chartParameter="bars"
          chartData={orbitParams?.mean_motion?.toFixed(2)}
          chartColor="#ffff00"
          chartMaxValue={150}
        />
        <RocketChart
          title="RAAN"
          chartParameter="times"
          chartData={orbitParams?.raan?.toFixed(2)}
          chartColor="#4a8bf6"
          chartMaxValue={400}
        />
      </StRocketInfoRocketChartsContainer>
      <StRocketInfoRocketImg>
        <img src={rocketImg} alt="falcon" />
      </StRocketInfoRocketImg>
      <StRocketInfoInfoContainer>
        <StRocketInfoRocketLunchInfo left>
          <StRocketInfoRocketLunchInfoDPart>
            <span>
              <p>Launch date </p>
              <p>{data?.launch_date_utc.substring(0, 10) || "-"}</p>
            </span>
            <span>
              <p>Nationality</p>
              <p>{rocketData?.nationality || "-"}</p>
            </span>
            <span>
              <p>Customer</p>
              <p>{rocketData?.customers[0] || "-"}</p>
            </span>
            <span>
              <p>Payload type</p>
              <p> {rocketData?.payload_type} </p>
            </span>
            <span>
              <p>Flight number</p>
              <p>{data?.flight_number || "-"}</p>
            </span>
            <span>
              <p>Core serial</p>
              <p>{landingData?.core_serial || "-"}</p>
            </span>
            <span>
              <p>Core flight</p>
              <p>{landingData?.flight || "-"}</p>
            </span>
            <span>
              <p>Cap serial</p>
              <p>{rocketData?.cap_serial || "-"}</p>
            </span>
          </StRocketInfoRocketLunchInfoDPart>
          <StRocketInfoRocketLunchInfoChPart>
            <RocketInfoRange
              rangeValue={orbitParams?.periapsis_km || 0}
              maxValue="50000"
              title="Periapsis"
            />
            <RocketInfoRange
              rangeValue={orbitParams?.semi_major_axis_km || 0}
              maxValue="50000"
              title="Semi major axis"
            />
          </StRocketInfoRocketLunchInfoChPart>
        </StRocketInfoRocketLunchInfo>
        <StRocketInfoRocketLunchInfo>
          <StRocketInfoRocketLunchInfoDPart right>
            <span>
              <p>land success</p>
              {landingData?.land_success ? (
                <BsFillCheckCircleFill fill="#7fe758" />
              ) : (
                <BsFillCircleFill />
              )}
            </span>

            <span>
              <p>landing intent</p>
              {landingData?.landing_intent ? (
                <BsFillCheckCircleFill fill="#7fe758" />
              ) : (
                <BsFillCircleFill />
              )}
            </span>
            <span>
              <p>fairings recovered</p>
              {data?.rocket.fairings?.recovered ? (
                <BsFillCheckCircleFill fill="#7fe758" />
              ) : (
                <BsFillCircleFill />
              )}
            </span>
            <span>
              <p> capsule reuse </p>
              {data?.rocket.fairings?.reused ? (
                <BsFillCheckCircleFill fill="#7fe758" />
              ) : (
                <BsFillCircleFill />
              )}
            </span>
            <span>
              <p>launch success</p>
              {data?.launch_success ? (
                <BsFillCheckCircleFill fill="#7fe758" />
              ) : (
                <BsFillCircleFill />
              )}
            </span>
          </StRocketInfoRocketLunchInfoDPart>
          <StRocketInfoRocketLunchInfoChPart>
            <RocketInfoRange
              rangeValue={orbitParams?.apoapsis_km || 0}
              maxValue="10000"
              title="Apoapsis"
            />
            <RocketInfoRange
              rangeValue={orbitParams?.eccentricity || 0}
              maxValue="0.01"
              title="Eccentricity"
            />
          </StRocketInfoRocketLunchInfoChPart>
        </StRocketInfoRocketLunchInfo>
      </StRocketInfoInfoContainer>
      <StRocketInfoRocketID>
        <p>{data?.rocket.rocket_name}- merlin C</p>
        <p>
          FLIGT ID: <span>5a9fc479ab70786ba5a1eaaa</span>
        </p>
      </StRocketInfoRocketID>
    </StRocketInfoContainer>
  );
});

export default RocketInfo;
