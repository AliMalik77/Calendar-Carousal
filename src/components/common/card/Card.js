import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./card.styles.less";
import PropTypes from "prop-types";

const CalendarCard = (props) => {
  return (
    <>
      {" "}
      <Card className="card" title={props.day}>
        <p className="date">{props.date}</p>

        <Meta className="meta" title={props.month}></Meta>
      </Card>
    </>
  );
};

CalendarCard.propTypes = {
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
};

CalendarCard.defaultProps = {
  date: 24,
  day: "Tuesday",
  month: "January",
};
export default CalendarCard;
