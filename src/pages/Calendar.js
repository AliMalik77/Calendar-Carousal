import React, { useState } from "react";
import { Col, Row } from "antd";
import moment from "moment";
import { Carousal } from "../components/common/carousal/Carousal";
import CalendarCard from "../components/common/card/Card";
import { Button, Tooltip } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Booking from "../components/common/booking/Booking";
import PropTypes from "prop-types";

const getDaysBetweenDates = (startDate, endDate) => {
  const now = startDate.clone(),
    dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push({
      day: moment(now).format("dddd"),
      date: moment(now).format("DD"),
      month: moment(now).format("MMMM"),
      year: moment(now).format("YYYY"),
    });

    now.add(1, "days");
  }
  return dates;
};

export const Calendar = (props) => {
  const [initialState, setInitialState] = useState({
    event: false,
    date: ["Today"],
    data: [],
  });

  const startDate = moment("2021-02-03");
  const endDate = moment("2021-02-10");

  const disableDates = props?.disableDates;
  let formatDate;
  let check;
  const dateList = getDaysBetweenDates(startDate, endDate);

  const handleEvent = (data) => {
    setInitialState((state) => {
      return {
        ...state,
        date: data.date.concat(" ", data.month, " ", data.year),
        event: true,
        data: data,
      };
    });
  };

  const handleDate = (data) => {
    if (data) {
      setInitialState((state) => {
        return {
          ...state,
          event: true,
          date: ["Today"],
        };
      });
    } else {
      setInitialState((state) => {
        return {
          ...state,
          event: false,
          date: ["Today"],
        };
      });
    }
  };

  if (!initialState.event) {
    return (
      <>
        <Row className="date-row">
          <Col span={14} offset={4}>
            Date
          </Col>
          <Col>
            {initialState.date}
            <Tooltip title="Down">
              <Button
                type="primary"
                shape="square"
                icon={<CaretDownOutlined />}
                onClick={() => handleDate(true)}
              />
            </Tooltip>
          </Col>
        </Row>

        <Row>
          <Carousal
            dots={false}
            arrows={true}
            slidesToShow={3}
            slidesToScroll={3}
            speed={300}
            infinite={true}
          >
            {dateList.map(
              (item, index) => (
                (formatDate =
                  dateList[index].year +
                  "-" +
                  dateList[index].month +
                  "-" +
                  dateList[index].date),
                (formatDate = moment(formatDate).format("YYYY-MM-DD")),
                (check = disableDates.includes(formatDate)),
                (
                  <Col
                    span={24}
                    key={index}
                    onClick={
                      check ? () => {} : () => handleEvent(dateList[index])
                    }
                  >
                    <CalendarCard
                      date={dateList[index].date}
                      day={dateList[index].day}
                      month={dateList[index].month}
                      key={index}
                      closed={check}
                    />
                  </Col>
                )
              )
            )}
          </Carousal>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row className="date-row">
          <Col span={14} offset={4}>
            Date
          </Col>
          <Col>
            {initialState.date}
            <Tooltip title="Down">
              <Button
                type="primary"
                shape="square"
                icon={<CaretUpOutlined />}
                onClick={() => handleDate(false)}
              />
            </Tooltip>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Booking data={initialState.data} />
          </Col>
        </Row>
      </>
    );
  }
};

Calendar.propTypes = {
  disableDates: PropTypes.array.isRequired,
};

Calendar.defaultProps = {
  disableDates: ["2021-02-03"],
};
