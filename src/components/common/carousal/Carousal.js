import { Carousel, Row, Col, Button } from "antd";
import React from "react";
import "./carousal.styles.less";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

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
    <div
      className={className}
      onClick={onClick}
      style={{
        height: "10vh",
        backgroundColor: "red",
        width: "50px",
        marginRight: "100px",
      }}
    >
      <Button>
        {" "}
        <LeftOutlined />
      </Button>
    </div>
  );
}

export const Carousal = (props) => {
  const settings = {
    // prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <Col lg={{ span: 18, offset: 4 }}>
      <Carousel
        className="carousal"
        dots={props.dots}
        {...settings}
        arrows={props.arrows}
        slidesToShow={props.slidesToShow}
        slidesToScroll={props.slidesToScroll}
        speed={props.speed}
        infinite={props.infinite}
      >
        {props.children}
      </Carousel>
    </Col>
  );
};

Carousal.propTypes = {
  dots: PropTypes.bool.isRequired,
  arrows: PropTypes.bool.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  slidesToScroll: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  infinite: PropTypes.bool.isRequired,
};

Carousal.defaultProps = {
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300,
  infinite: true,
};
