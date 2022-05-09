import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./card.styles.less";
import PropTypes from "prop-types";

const CalendarCard = (props) => {
  return (
    <>
      {" "}
      <Card className="card" title={props.data.day}>
        <p className="date">{props.data.date}</p>
        <Meta className="meta" title={props.data.month}></Meta>
      </Card>
    </>
  );
};

CalendarCard.propTypes = {
  date: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
};

CalendarCard.defaultProps = {
  date: 24,
  day: "Tuesday",
  month: "January",
};
export default CalendarCard;
