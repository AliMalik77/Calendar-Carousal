import React from "react";
import Calendar from "../components/calendar/Calendar";

const Appointment = () => {
  return (
    <>
      <Calendar
        disableDates={["2021-02-03", "2021-02-05"]}
        startDate={"2021-02-03"}
        endDate={"2021-02-10"}
        onDateselect={(date) => {
          return date;
        }}
      />
    </>
  );
};

export default Appointment;
