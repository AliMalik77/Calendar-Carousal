import React from "react";
import Calendar from "../components/calendar/Calendar";

const Appointment = () => {
  return (
    <>
      <Calendar
        disableDates={["2021-02-03", "2021-02-05"]}
        startDate={"2021-02-03"}
        endDate={"2021-02-10"}
        onDateselect={(value) => {
          alert(
            "you are booking an event on " +
              value.date +
              " " +
              value.month +
              " " +
              value.year
          );
        }}
      />
    </>
  );
};

export default Appointment;
