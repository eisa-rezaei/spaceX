import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import RocketNavigation from "./components/Navigation";
import RocketInfo from "./components/RocketInfo";
import Loading from "components/Loading";
import RocketSearch from "./components/RocketSearch";

import {
  StRocketNextBeforeRocket,
  StRocketPageBtns,
  StRocketPageContainer,
  StRocketPageTitleBox,
} from "./style";

const RocketPage = () => {
  //-----states

  const [isUpComing, setIsUpComing] = useState(false);
  const { isLoading, data } = useQuery(
    isUpComing ? "RocketUpData" : "RocketPastData",
    async () => {
      const res = await fetch(
        `https://api.spacexdata.com/v3/launches/${
          isUpComing ? "upcoming" : "past"
        }`
      );
      const data = await res.json();
      return data;
    },
    {
      staleTime: 30000,
    }
  );
  const [currentShipIndex, setCurrentShipIndex] = useState(0);
  const [siteList, setSiteList] = useState({});

  const { siteNameParam } = useParams();
  const siteNameParamReplaced = siteNameParam?.replaceAll("_", " ");

  const [currentSite, setCurrentSite] = useState(
    siteNameParamReplaced || (data && data[0].launch_site.site_name)
  );
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  //-----states

  //-----effects

  useEffect(() => {
    const filterData =
      data &&
      data.filter(
        (i) =>
          i.launch_site.site_name.toLowerCase() === currentSite?.toLowerCase()
      );
    setFilteredData(filterData?.reverse());
    setCurrentSite(filterData && filterData[0]?.launch_site.site_name);
  }, [data, currentSite]);

  useEffect(() => {
    setCurrentShipIndex(0);
  }, [currentSite]);

  useEffect(() => {
    setCurrentSite(
      siteNameParamReplaced || (data && data[0].launch_site.site_name)
    );
    const sitesList = data?.reduce((total, curr) => {
      if (total[curr.launch_site.site_name] >= 0) {
        total[curr.launch_site.site_name] =
          total[curr.launch_site.site_name] + 1;
      } else {
        total[curr.launch_site.site_name] = 1;
      }
      return total;
    }, {});

    setSiteList(sitesList);
  }, [data, siteNameParamReplaced]);

  //-----effects

  const currentLunchChangeHandler = (query) => {
    if (query === "next") {
      setCurrentShipIndex(
        filteredData?.length - 1 !== currentShipIndex
          ? currentShipIndex + 1
          : currentShipIndex
      );
    } else {
      setCurrentShipIndex(
        currentShipIndex === 0 ? filteredData : currentShipIndex - 1
      );
    }
  };

  const isUpComingChangeHandler = (boolean) => () => {
    navigate("/");
    if (boolean) {
      if (!isUpComing) setCurrentShipIndex(0);
      setIsUpComing(true);
    } else {
      if (isUpComing) setCurrentShipIndex(0);
      setIsUpComing(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <StRocketPageContainer>
      <StRocketPageTitleBox>
        <h1>SPACEX LUNCH OVERVIEW</h1>
        <RocketSearch
          setCurrentSite={setCurrentSite}
          siteList={siteList}
          setFilteredData={setFilteredData}
          setCurrentShipIndex={setCurrentShipIndex}
        />
        <StRocketPageBtns isUpComing={isUpComing ? 1 : 2}>
          <button onClick={isUpComingChangeHandler(true)}>UPCOMING</button>
          <button onClick={isUpComingChangeHandler()}>PAST</button>
        </StRocketPageBtns>
      </StRocketPageTitleBox>
      <RocketInfo data={filteredData && filteredData[currentShipIndex]} />
      <RocketNavigation RocketData={siteList} currentSite={currentSite} />
      <StRocketNextBeforeRocket
        onClick={() => currentLunchChangeHandler("next")}
        shouldShow={
          filteredData?.length > 0 &&
          filteredData?.length - 1 !== currentShipIndex
        }
      >
        <AiOutlineRight />
      </StRocketNextBeforeRocket>
      <StRocketNextBeforeRocket
        left
        onClick={() => currentLunchChangeHandler()}
        shouldShow={filteredData?.length > 0 && currentShipIndex !== 0}
      >
        <AiOutlineLeft />
      </StRocketNextBeforeRocket>
    </StRocketPageContainer>
  );
};

export default RocketPage;
