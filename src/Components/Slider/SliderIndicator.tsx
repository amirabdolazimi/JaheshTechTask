import classes from "./SliderIndicator.module.css";
import { ISliderIndicator } from "../../models/interface/interface";

const SliderIndicator: React.FC<ISliderIndicator> = ({
  sliderContent,
  sliderIndex,
  setSliderIndex,
}) => {
  return sliderContent.map((slide, index) => (
    <div
      onClick={() => setSliderIndex(index)}
      key={slide.id}
      className={`${classes.circle} ${
        index === sliderIndex && classes.selectedCircle
      }`}
    ></div>
  ));
};

export default SliderIndicator;
