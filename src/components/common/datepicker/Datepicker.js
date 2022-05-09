import React from "react";
import { DatePicker, Space } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

const DatePickerr = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);

export default DatePickerr;
