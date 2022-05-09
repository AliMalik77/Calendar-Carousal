import { Carousel, Row, Col, Button } from "antd";
import React from "react";
import "./carousal.styles.less";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",

  textAlign: "center",
  background: "#364d79",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <Button>
        {" "}
        <RightOutlined />
      </Button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <Button>
        {" "}
        <LeftOutlined />
      </Button>
    </div>
  );
}

export const Carousal = (props) => {
  const data = props.data;
  console.log("props data is .......>>>>>>>>>", props);

  const settings = {
    dots: true,
    // autoplay: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,

    infinite: false,
  };

  return (
    <Col lg={{ span: 18, offset: 3 }}>
      <Carousel className="carousal" {...settings}>
        {props.children}
      </Carousel>
    </Col>
  );
};
