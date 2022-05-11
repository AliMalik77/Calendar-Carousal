import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TimePicker from "../timepicker/Timepicker";
import { Typography, Row, Col, Button, Tooltip } from "antd";
const { Title } = Typography;
import "./booking.styles.less";

const Booking = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const increaseTime = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else if (minutes === 59) {
      setHours((x) => x + 1);
      setMinutes(0);
    }
  };
  const decreaseTime = () => {
    if (minutes > 0 && hours >= 0) {
      setMinutes(minutes - 1);
    } else if (minutes === 0 && hours > 0) {
      setMinutes(59);
      setHours(hours - 1);
    }
  };

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
                onClick={() => decreaseTime()}
              />
              {hours} : {minutes}
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                className="time-btn"
                onClick={() => increaseTime()}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Booking;
