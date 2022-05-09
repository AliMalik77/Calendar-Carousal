import { TimePicker } from "antd";
import moment from "moment";
import React from "react";

function onChange(time, timeString) {
  console.log(time, timeString);
}

const Timepickerr = () => (
  <TimePicker
    onChange={onChange}
    defaultValue={moment("00:00:00", "HH:mm:ss")}
  />
);

export default Timepickerr;
