import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import TimeSearch from "./TimeSearch";
import {
  StRocketSearch,
  StRocketSearchResults,
  StRocketSearchResultsItem,
} from "./style";

const RocketSearch = ({
  setCurrentSite,
  siteList,
  setFilteredData,
  setCurrentShipIndex,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTimeSearch, setIsTimeSearch] = useState(false);
  const [timeSearchValues, setTimeSearchValues] = useState({});

  useEffect(() => {
    if (timeSearchValues?.from && timeSearchValues?.to) {
      const fetchData = async () => {
        const res = await fetch(
          `https://api.spacexdata.com/v3/launches?start="${timeSearchValues?.from}"&end="${timeSearchValues?.to}"`
        );
        const data = await res.json();
        setFilteredData(data.reverse());
        setCurrentShipIndex(0);
      };
      fetchData();
    }
  }, [timeSearchValues, setFilteredData, setCurrentShipIndex]);

  return (
    <StRocketSearch>
      {isTimeSearch ? (
        <TimeSearch setTimeSearchValues={setTimeSearchValues} />
      ) : (
        <>
          <input
            placeholder="SEARCH BETWEEN LUNCHES ... "
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <BiSearch />
          <StRocketSearchResults shouldShow={!!searchTerm}>
            {siteList &&
              Object.keys(siteList)
                ?.filter((siteName) =>
                  siteName.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <StRocketSearchResultsItem
                    key={index}
                    onClick={() => {
                      setSearchTerm("");
                      setCurrentSite(item);
                    }}
                  >
                    {item}
                    <p>x{Object.values(siteList)[index]}&nbsp;lunches</p>
                  </StRocketSearchResultsItem>
                ))}
          </StRocketSearchResults>
        </>
      )}
      <button className="calendar-toggle-icon">
        {isTimeSearch ? (
          <AiOutlineCloseCircle onClick={() => setIsTimeSearch(false)} />
        ) : (
          <BiCalendar onClick={() => setIsTimeSearch(true)} />
        )}
      </button>
    </StRocketSearch>
  );
};

RocketSearch.propTypes = {
  setCurrentSite: PropTypes.func.isRequired,
  siteList: PropTypes.object.isRequired,
  setCurrentShipIndex: PropTypes.func.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default RocketSearch;
