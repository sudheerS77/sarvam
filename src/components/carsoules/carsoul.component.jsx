import React from "react";
import Slider from "react-slick";
import ImageComponent from "./imge.component";

const CarouselComponent = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselImages = [
    "https://img.freepik.com/free-psd/engineer-hard-hat-mockup-psd-ppe-equipment_53876-115929.jpg",
    "https://img.freepik.com/free-photo/firefighters-rescued-survivors_1150-8370.jpg",
    "https://img.freepik.com/free-photo/front-view-protective-glasses-with-hard-hat-headphones_23-2148773471.jpg",
  ];
  return (
    <div className="z-0">
      <Slider {...settings}>
        {carouselImages.map((image) => (
          <ImageComponent image={image} />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
