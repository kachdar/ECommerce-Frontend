import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { settings } from "./sliderSettings";
import { promos } from "./promos";

const PromoSlider = () => {
  return (
    <Slider {...settings}>
      {promos.map((promo) => (
        <div
          key={promo.id}
          style={{
            width: "100%",
            height: "500px",
          }}
        >
          <img
            src={promo.imageUrl}
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
          <h2>{promo.title}</h2>
          <p>{promo.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default PromoSlider;
