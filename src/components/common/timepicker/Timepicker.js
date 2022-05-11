import { TimePicker } from "antd";
import moment from "moment";
import React from "react";

const Timepickerr = () => (
  <TimePicker defaultValue={moment("00:00:00", "HH:mm:ss")} />
);

export default Timepickerr;
