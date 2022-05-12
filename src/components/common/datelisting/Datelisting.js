import React from "react";
import { Col, Row } from "antd";
import { Carousal } from "../carousal/Carousal";
import CalendarCard from "../card/Card";
import moment from "moment";
const Datelisting = (props) => {
  let formatDate;
  let check;
  return (
    <>
      <Row>
        <Carousal>
          {props?.dateList.map(
            (item, index) => (
              (formatDate =
                props?.dateList[index].year +
                "-" +
                props?.dateList[index].month +
                "-" +
                props?.dateList[index].date),
              (formatDate = moment(formatDate).format("YYYY-MM-DD")),
              (check = props?.disableDates.includes(formatDate)),
              (
                <Col
                  span={24}
                  key={index}
                  onClick={
                    check
                      ? () => {
                          alert("Event Booked on these dates");
                        }
                      : () => {
                          props.onClick(index);
                        }
                  }
                >
                  <CalendarCard
                    date={props?.dateList[index].date}
                    day={props?.dateList[index].day}
                    month={props?.dateList[index].month}
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
};

export default Datelisting;
