import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./card.styles.less";
import PropTypes from "prop-types";

const CalendarCard = (props) => {
  console.log("props data in calendarCard is ......>", props.data);
  const { date, day, month } = props.data;

  const handleEvent = () => {
    localStorage.setItem("date", date);
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
  };
  return (
    <>
      {" "}
      <Card className="card" title={day}>
        <p className="date">{date}</p>

        <Meta className="meta" title={month}></Meta>
      </Card>
    </>
  );
};

CalendarCard.propTypes = {
  date: PropTypes.any,
  day: PropTypes.bool.isRequired,
  month: PropTypes.number.isRequired,
};

export default CalendarCard;
