import React from "react";
import { Col, Row, Button, Tooltip } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const Dropdown = (props) => {
  return (
    <>
      <Row className="date-row">
        <Col span={14} offset={4}>
          Date
        </Col>
        <Col>
          {props?.initialState?.date}
          {props?.initialState.event ? (
            <Tooltip title="Down">
              <Button
                type="primary"
                shape="square"
                icon={<CaretUpOutlined />}
                onClick={props.onClick}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Down">
              <Button
                type="primary"
                shape="square"
                icon={<CaretDownOutlined />}
                onClick={props.onClick}
              />
            </Tooltip>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Dropdown;
