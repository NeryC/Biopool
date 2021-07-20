/* eslint-disable react/display-name */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Promotion from "./Promotions";
import Media from "./Media";


const SliderSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  function dot(dots) {
    <ul>{dots}</ul>
  }
  return (
    <div className="bg-green5">
      <Slider {...settings}>
        <div>
          <Promotion />
        </div>
        <div>
          <Media />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
