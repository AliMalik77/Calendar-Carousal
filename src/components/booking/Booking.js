import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TimePicker from "../timepicker/Timepicker";
import { Typography, Row, Col, Button, Tooltip } from "antd";
import moment from "moment";

const format = "HH:mm";
const { Title } = Typography;

const Booking = (props) => {
  console.log("in Booking");
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  if (minutes > 59) {
    setHours(hours + 1);
    setMinutes(0);
  }
  if (hours > 23) {
    setHours(0);
  } else {
    // console.log(minutes);
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

            <Button
              shape="circle"
              icon={<MinusOutlined />}
              style={{ marginLeft: "10px", marginRight: "10px" }}
            />
            <Col>
              {" "}
              <Title level={3}>
                {hours}:{minutes}
              </Title>
            </Col>
            <Button
              shape="circle"
              icon={<PlusOutlined />}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              onClick={() => setMinutes(minutes + 1)}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Booking;
