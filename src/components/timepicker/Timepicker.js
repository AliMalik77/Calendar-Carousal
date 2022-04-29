import React from "react";
import { TimePicker } from "antd";
import moment from "moment";
function onChange(time, timeString) {
  console.log("time", time);
  console.log("timeString", timeString);
  // localStorage.setItem("time", timeString);
}

const format = "HH:mm";

const TimePickerr = () => (
  <>
    <TimePicker
      defaultValue={moment("00:00", format)}
      format={format}
      onChange={onChange}
    />
  </>
);

export default TimePickerr;
