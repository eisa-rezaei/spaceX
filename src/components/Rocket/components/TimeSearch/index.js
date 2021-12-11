import React, { useEffect, useState } from "react";

import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import { StRocketTimeSearch } from "./style";

const TimeSearch = ({ setTimeSearchValues }) => {
  const [selectedStartDay, setSelectedStartDay] = useState(null);
  const [selectedEndDay, setSelectedEndDay] = useState(null);

  const minimumDate = {
    year: 2005,
    month: 1,
    day: 1,
  };

  useEffect(() => {
    if (selectedEndDay && selectedStartDay) {
      setTimeSearchValues({
        from: `${selectedStartDay?.year}-${selectedStartDay?.month}-${selectedStartDay?.day}`,
        to: `${selectedEndDay?.year}-${selectedEndDay?.month}-${selectedEndDay?.day}`,
      });
    }
  }, [selectedEndDay, selectedStartDay, setTimeSearchValues]);

  const oneDayAfter = { ...selectedStartDay, day: selectedStartDay?.day + 1 };

  return (
    <StRocketTimeSearch>
      <DatePicker
        value={selectedStartDay}
        maximumDate={utils().getToday()}
        onChange={setSelectedStartDay}
        minimumDate={minimumDate}
        inputPlaceholder="Start Date"
        calendarClassName="abcd"
      />
      To
      <DatePicker
        value={selectedEndDay}
        maximumDate={utils().getToday()}
        minimumDate={oneDayAfter}
        inputPlaceholder="End Date"
        onChange={setSelectedEndDay}
        calendarClassName="abcd"
      />
    </StRocketTimeSearch>
  );
};

export default TimeSearch;
