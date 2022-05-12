import React from "react";
import Calendar from "../components/calendar/Calendar";

const Appointment = () => {
  return (
    <>
      <Calendar
        disableDates={["2021-02-03"]}
        startDate={"2021-02-03"}
        endDate={"2021-02-10"}
      />
    </>
  );
};

export default Appointment;
