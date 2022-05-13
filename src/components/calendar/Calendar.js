import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import moment from "moment";
import Booking from "../common/booking/Booking";
import PropTypes from "prop-types";
import Dropdown from "../common/dropdown/Dropdown";
import { getDaysBetweenDates } from "../../helper/GetDays";
import Datelisting from "../common/datelisting/Datelisting";

const Calendar = (props) => {
  const [date, setDate] = useState(props?.startDate);

  if (props?.onDateselect(date)) {
    useEffect(() => {
      setDate(props.onDateselect("2021-02-05"));
    }, []);
  }

  const [initialState, setInitialState] = useState({
    event: false,
    date: ["Today"],
    data: [],
  });

  const startDate = moment(date);
  const endDate = moment(props?.endDate);
  const disableDates = props?.disableDates;

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
        <Dropdown
          onClick={() => handleDate(true)}
          initialState={initialState}
        />
        <Datelisting
          onClick={(value) => {
            handleEvent(dateList[value]);
          }}
          dateList={dateList}
          disableDates={disableDates}
        />
      </>
    );
  } else {
    return (
      <>
        <Dropdown
          onClick={() => handleDate(false)}
          initialState={initialState}
        />

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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  onDateselect: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  disableDates: ["2021-02-03"],
  startDate: "2021-02-03",
  endDate: "2021-02-10",
  onDateselect: () => {},
};

export default Calendar;
