import classes from "./SliderIndicator.module.css";

const SliderIndicator = ({ sliderContent, sliderIndex }) => {
  return sliderContent.map((slide, index) => (
    <div
      key={slide.id}
      className={`${classes.circle} ${
        index === sliderIndex && classes.selectedCircle
      }`}
    ></div>
  ));
};

export default SliderIndicator;
