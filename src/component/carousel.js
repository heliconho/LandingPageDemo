import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import Image1 from "../carousel1.jpg";
import Image2 from "../carousel2.jpg";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [images, setImages] = useState([
    { id: 1, src: "https://cdn.reubird.hk/general/images/gift-header.jpeg" },
    {
      id: 2,
      src: "https://cdn.reubird.hk/general/images/catering-header.jpeg",
    },
  ]);
  return (
    <>
      {/* <Flickity options={flickityOptions}>
        <img src="https://cdn.reubird.hk/general/images/gift-header.jpeg" />
        <img src="https://cdn.reubird.hk/general/images/venue_frontlawn.jpeg" />
        <img src="https://cdn.reubird.hk/general/images/catering-header-2.jpeg" />
      </Flickity> */}
      <Slider {...settings}>
        <div className="w-100 h-66">
          <img
            className="object-fill w-full blur-up lazyloaded"
            data-src="https://cdn.reubird.hk/general/images/gift-header.jpeg"
            src="https://cdn.reubird.hk/general/images/gift-header.jpeg"
          />
        </div>
        <div className="w-100 h-66">
          <img
            className="object-fill w-full blur-up lazyloaded"
            data-src="https://cdn.reubird.hk/general/images/venue_frontlawn.jpeg"
            src="https://cdn.reubird.hk/general/images/venue_frontlawn.jpeg"
          />
        </div>
        <div className="w-100 h-66">
          <img
            className="object-fill w-full blur-up lazyloaded"
            data-src="https://cdn.reubird.hk/general/images/catering-header-2.jpeg"
            src="https://cdn.reubird.hk/general/images/catering-header-2.jpeg"
          />
        </div>
      </Slider>
      <div className="col-sm-5 col-11 m-auto px-sm-3 px-0 z-50">
        <h1 className="text-white rb-font-size-2xl text-center">
          預訂活動及慶祝所需
        </h1>
        <h2 className="text-white rb-font-size-xxl text-center">
          輕鬆搞好每個活動
        </h2>
      </div>
    </>
  );
};

export default ImageCarousel;
