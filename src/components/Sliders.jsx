import imageSlider from "../api/imageData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageSlider } from "./ImageSlider";
import "../css/ImageSlider.css";

export const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imageSlider.map((curEle, id) => (
          <ImageSlider key={id} data={curEle} />
        ))}
      </Slider>
    </div>
  );
};
