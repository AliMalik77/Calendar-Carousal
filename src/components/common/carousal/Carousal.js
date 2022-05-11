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

export const Carousal = (props) => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Col
      lg={{ span: 18, offset: 4 }}
      md={{ span: 20, offset: 2 }}
      sm={{ span: 18, offset: 3 }}
      // xs={{ span: 12, offset: 2 }}
    >
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
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300,
  infinite: true,
};
