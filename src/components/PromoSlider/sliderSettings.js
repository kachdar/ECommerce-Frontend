import Arrow from "./Arrow/Arrow";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow myStyles={{ right: "10px" }} />,
  prevArrow: <Arrow myStyles={{ left: "10px" }} />,
};
