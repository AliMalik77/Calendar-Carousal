import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TimePicker from "../components/common/timepicker/Timepicker";
import { Typography, Row, Col, Button, Tooltip } from "antd";
const { Title } = Typography;
import "./pages.styles.less";

const Booking = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  if (minutes > 59) {
    setHours(hours + 1);
    setMinutes(0);
  }
  if (hours > 23) {
    setHours(0);
  }
  if (minutes < 0) {
    setHours(hours - 1);
    setMinutes(0);
  }
  if (minutes < 0 && hours > 0) {
    setHours(hours - 1);
    setMinutes(59);
  }
  if (hours < 0) {
    alert("invalid time");
    setHours(0);
  }
  return (
    <>
      <Row className="box">
        <Col span={16} offset={4} className="col-box">
          <Row className="time-row">
            <Col offset={3}>
              <Title level={3}> Time </Title>
            </Col>
            <Col offset={7}>
              <TimePicker />
            </Col>
          </Row>
          <Row className="duration-row">
            <Col span={5} offset={3}>
              <Title level={3}> Duration : </Title>
            </Col>
            <Col span={10} offset={4} className="btn-col">
              <Button
                shape="circle"
                icon={<MinusOutlined />}
                className="time-btn"
                onClick={() => setMinutes(minutes - 1)}
              />
              {hours} : {minutes}
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                className="time-btn"
                onClick={() => setMinutes(minutes + 1)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Booking;
