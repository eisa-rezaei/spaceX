import React from "react";
import rocketImg from "assets/Falcon91.svg";
import { BsCircle } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

import {
  StRocketInfoContainer,
  StRocketInfoRocketID,
  StRocketInfoRocketImg,
  StRocketInfoRocketLunchInfo,
  StRocketInfoRocketLunchInfoChPart,
  StRocketInfoRocketLunchInfoDPart,
} from "./style";
import RocketCharts from "./RocketCharts";

const RocketInfo = ({ data }) => {
  const rocketData = data?.rocket.second_stage.payloads[0];
  const landingData = data?.rocket.first_stage.cores[0];
  return (
    <StRocketInfoContainer>
      <RocketCharts data={rocketData?.orbit_params} />
      <StRocketInfoRocketImg>
        <img src={rocketImg} alt="falcon" />
      </StRocketInfoRocketImg>
      <StRocketInfoRocketLunchInfo left>
        <StRocketInfoRocketLunchInfoDPart>
          <span>
            <p>Launch date </p>
            <p>{data?.launch_date_utc.substring(0, 10)}</p>
          </span>
          <span>
            <p>Nationality</p>
            <p>{rocketData?.nationality}</p>
          </span>
          <span>
            <p>Customer</p>
            <p>{rocketData?.customers[0]}</p>
          </span>
          <span>
            <p>Payload type</p>
            <p> {rocketData?.payload_type} </p>
          </span>
          <span>
            <p>Flight number</p>
            <p>{data?.flight_number}</p>
          </span>
          <span>
            <p>Core serial</p>
            <p>{landingData?.core_serial || "Default"}</p>
          </span>
          <span>
            <p>Core flight</p>
            <p>{landingData?.flight || "Default"}</p>
          </span>
          <span>
            <p>Cap serial</p>
            <p>{rocketData?.cap_serial || "Default"}</p>
          </span>
        </StRocketInfoRocketLunchInfoDPart>
        <StRocketInfoRocketLunchInfoChPart>
          <h6>Periapsis</h6>
          <span>
            <input
              readOnly
              type="range"
              className="range"
              value={rocketData?.orbit_params?.periapsis_km || 0}
              max="1000"
            />
            <p>{rocketData?.orbit_params?.periapsis_km?.toFixed(0) || 0}km</p>
          </span>
          <h6>Semi major axis</h6>
          <span>
            <input
              readOnly
              type="range"
              className="range"
              value={rocketData?.orbit_params?.semi_major_axis_km || 0}
              max="10000"
            />
            <p>
              {rocketData?.orbit_params?.semi_major_axis_km?.toFixed(0) || "0"}
              km
            </p>
          </span>
        </StRocketInfoRocketLunchInfoChPart>
      </StRocketInfoRocketLunchInfo>
      <StRocketInfoRocketLunchInfo>
        <StRocketInfoRocketLunchInfoDPart right>
          <span>
            <p>land success</p>
            {landingData?.land_success ? (
              <BsFillCheckCircleFill fill="#7fe758" />
            ) : (
              <BsCircle />
            )}
          </span>

          <span>
            <p>landing intent</p>
            {landingData?.landing_intent ? (
              <BsFillCheckCircleFill fill="#7fe758" />
            ) : (
              <BsCircle />
            )}
          </span>
          <span>
            <p>fairings recovered</p>
            {data?.rocket.fairings?.recovered ? (
              <BsFillCheckCircleFill fill="#7fe758" />
            ) : (
              <BsCircle />
            )}
          </span>
          <span>
            <p> capsule reuse </p>
            {data?.rocket.fairings?.reused ? (
              <BsFillCheckCircleFill fill="#7fe758" />
            ) : (
              <BsCircle />
            )}
          </span>
          <span>
            <p>launch success</p>
            {data?.launch_success ? (
              <BsFillCheckCircleFill fill="#7fe758" />
            ) : (
              <BsCircle />
            )}
          </span>
        </StRocketInfoRocketLunchInfoDPart>
        <StRocketInfoRocketLunchInfoChPart>
          <h6>Apoapsis</h6>
          <span>
            <input
              readOnly
              type="range"
              className="range"
              value={rocketData?.orbit_params?.apoapsis_km || 0}
              max="1400"
            />
            <p>{rocketData?.orbit_params?.apoapsis_km?.toFixed(0)}km</p>
          </span>
          <h6>Eccentricity</h6>
          <span>
            <input
              readOnly
              type="range"
              className="range"
              value={rocketData?.orbit_params.eccentricity || 0}
              max="0.1"
            />
            <p>{rocketData?.orbit_params.eccentricity || "default"}</p>
          </span>
        </StRocketInfoRocketLunchInfoChPart>
      </StRocketInfoRocketLunchInfo>
      <StRocketInfoRocketID>
        <p>{data?.rocket.rocket_name}- merlin C</p>
        <p>
          FLIGT ID: <span>5a9fc479ab70786ba5a1eaaa</span>
        </p>
      </StRocketInfoRocketID>
    </StRocketInfoContainer>
  );
};

export default RocketInfo;
