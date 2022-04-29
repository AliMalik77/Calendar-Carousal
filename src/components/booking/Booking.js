import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TimePicker from "../timepicker/Timepicker";
import { Typography, Row, Col, Button, Tooltip } from "antd";
import moment from "moment";

const format = "HH:mm";
const { Title } = Typography;

// function onChange(time, timeString) {
//   console.log("Booking data is ......>>> ");
//   console.log("time", time);
//   console.log("timeString", timeString);
//   localStorage.setItem("day", moment(timeString).format("dddd"));
//   //   day: ,
//   //       date: moment(now).format("DD"),
//   //       month: moment(now).format("MMMM"),
// }

const Booking = () => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  if (minutes > 59) {
    console.log(minutes);
    setHours(hours + 1);
    setMinutes(0);
  }
  if (hours > 23) {
    setHours(0);
  } else {
    console.log(minutes);
  }

  return (
    <>
      <Row style={{ height: "20vh" }}>
        <Col span={12} offset={6} style={{ border: "1px solid" }}>
          <Row style={{ marginTop: "20px" }}>
            <Col offset={8}>
              <Title level={3}> Time : </Title>
            </Col>
            <Col offset={1}>
              <TimePicker />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col offset={8}>
              <Title level={3}> Duration : </Title>
            </Col>
            {/* <Col
              offset={1}
              style={{ fontSize: "20px", background: "red" }}
              onClick={() => alert("hi")}
            >
              {" "}
              aadasd
            </Col> */}
            <Button
              shape="circle"
              icon={<MinusOutlined />}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              //   onClick={() => {
              //     <TimePicker />;
              //   }}
            />
            <Col onClick={() => setMinutes(minutes + 1)}>
              {" "}
              <Title level={3}>
                <TimePicker
                  onChange={() => setMinutes(moment(now).format("mm"))}
                />
              </Title>
            </Col>
            <Button
              shape="circle"
              icon={<PlusOutlined />}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              //   onClick={() => setMinutes(minutes + 1)}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Booking;
