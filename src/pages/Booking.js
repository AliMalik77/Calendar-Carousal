import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TimePicker from "../components/common/timepicker/Timepicker";
import { Typography, Row, Col, Button, Tooltip } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Booking = (props) => {
  console.log("in Booking props data .............>>>>>>>>>>", props.data);
  const { day, date, month, year } = props.data;
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  if (minutes > 59) {
    setHours(hours + 1);
    setMinutes(0);
  }
  if (hours > 23) {
    setHours(0);
  }

  return (
    <>
      {/* <Row style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Col span={14} offset={4}>
          {" "}
          Date{" "}
        </Col>
        <Col>
          Today{" "}
          <Tooltip title="Down">
            <Button
              type="primary"
              shape="square"
              icon={<CaretDownOutlined />}
              onClick={() => setEvent(true)}
            />
          </Tooltip>{" "}
        </Col>
      </Row> */}
      <Row style={{ height: "20vh" }}>
        <Col span={16} offset={4} style={{ border: "1px solid" }}>
          {/* <Row style={{ marginTop: "10px" }}> */}
          {/* <Col offset={1} style={{ fontSize: "20px", fontWeight: "bold" }}>
              {date} {month} {year}
            </Col> */}
          {/* </Row> */}
          <Row style={{ marginTop: "30px" }}>
            <Col offset={3}>
              <Title level={3}> Time </Title>
            </Col>
            <Col offset={7}>
              <TimePicker />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={5} offset={3}>
              <Title level={3}> Duration : </Title>
            </Col>
            <Col
              span={10}
              offset={4}
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <Button
                shape="circle"
                icon={<MinusOutlined />}
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
              {hours} : {minutes}
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                style={{ marginLeft: "10px", marginRight: "10px" }}
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
