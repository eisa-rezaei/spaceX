import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import RocketFooter from "./components/Footer";
import RocketInfo from "./components/RocketInfo";
import { BiSearch } from "react-icons/bi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Loading from "components/Loading";
import {
  StRocketNextBeforeRocket,
  StRocketPageBtns,
  StRocketPageContainer,
  StRocketSearch,
} from "./style";

const RocketPage = () => {
  const [isUpComing, setIsUpComing] = useState(true);
  const [currentSite, setCurrentSite] = useState("KSC LC 39A");
  const [currentShipIndex, setCurrentShipIndex] = useState(0);

  const [siteList, setSiteList] = useState([]);

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

  useEffect(() => {
    const sites = data?.map((i) => i.launch_site.site_name);
    setSiteList([...new Set(sites)]);
  }, [data]);

  const starShipChanger = (query) => {
    let SiteLunchList = data.filter(
      (i) => i.launch_site.site_name === currentSite
    );
    if (query === "next") {
      setCurrentShipIndex(
        currentShipIndex < SiteLunchList.length - 1 ? currentShipIndex + 1 : 0
      );
    } else {
      setCurrentShipIndex(
        currentShipIndex === 0 ? SiteLunchList.length - 1 : currentShipIndex - 1
      );
    }
    setCurrentSite(SiteLunchList[currentShipIndex]?.launch_site.site_name);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <StRocketPageContainer>
      <h3>SPACEX LUNCH OVERVIEW</h3>
      <StRocketSearch>
        <input placeholder="SEARCH BETWEEN LUNCHES ... " />
        <BiSearch />
      </StRocketSearch>
      <StRocketPageBtns isUpComing={isUpComing ? 1 : 2}>
        <button onClick={() => setIsUpComing(true)}>UPCOMING</button>
        <button onClick={() => setIsUpComing(false)}>PAST</button>
      </StRocketPageBtns>
      <RocketInfo
        data={
          data.filter((i) => i.launch_site.site_name === currentSite)[
            currentShipIndex
          ]
        }
      />
      <RocketFooter
        RocketData={siteList}
        currentSite={currentSite}
        setCurrentSite={setCurrentSite}
      />
      <StRocketNextBeforeRocket onClick={() => starShipChanger("next")}>
        <AiOutlineRight />
      </StRocketNextBeforeRocket>
      <StRocketNextBeforeRocket left onClick={() => starShipChanger()}>
        <AiOutlineLeft />
      </StRocketNextBeforeRocket>
    </StRocketPageContainer>
  );
};

export default RocketPage;
