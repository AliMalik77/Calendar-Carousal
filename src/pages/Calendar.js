import React, { useState } from "react";
import { Col, Row } from "antd";
import moment from "moment";
import { Carousal } from "../components/common/carousal/Carousal";
import CalendarCard from "../components/common/card/Card";
import TimePickerr from "../components/timepicker/Timepicker";
import { Button, Tooltip } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Booking from "../components/booking/Booking";

const getDaysBetweenDates = function (startDate, endDate) {
  var now = startDate.clone(),
    dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push({
      day: moment(now).format("dddd"),
      date: moment(now).format("DD"),
      month: moment(now).format("MMMM"),
    });

    now.add(1, "days");
  }
  return dates;
};

export const Calendar = () => {
  const [event, setEvent] = useState(false);

  var startDate = moment("2021-02-03");
  var endDate = moment("2021-02-06");

  var dateList = getDaysBetweenDates(startDate, endDate);

  if (!event) {
    return (
      <>
        <Row style={{ marginTop: "200px" }}>
          <Col span={1} offset={18}>
            {" "}
            <Tooltip title="Down">
              <Button
                type="primary"
                shape="square"
                icon={<CaretDownOutlined />}
                onClick={() => setEvent(true)}
              />
            </Tooltip>{" "}
          </Col>
        </Row>

        <Row>
          <Carousal>
            {dateList.map((item, index) => (
              <Col span={24} key={index}>
                <CalendarCard data={dateList[index]} key={index} />
              </Col>
            ))}
          </Carousal>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row style={{ marginTop: "200px" }}>
          <Col span={1} offset={18}>
            {" "}
            <Tooltip title="Down">
              <Button
                type="primary"
                shape="square"
                icon={<CaretUpOutlined />}
                onClick={() => setEvent(false)}
              />
            </Tooltip>{" "}
          </Col>
        </Row>

        <Row>
          {" "}
          <Col span={24}>
            {" "}
            <Booking />
          </Col>
        </Row>
      </>
    );
  }
};
