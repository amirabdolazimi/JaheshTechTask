import { useState } from "react";
import CarretLeftIcon from "../Icons/CarretLeftIcon";
import CarretRightIcon from "../Icons/CarretRightIcon";
import SliderIndicator from "./SliderIndicator";
import classes from "./PostSlider.module.css";
import { IPostSlider } from "../../models/interface/interface";

const PostSlider: React.FC<IPostSlider> = ({ sliderContent }) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setSliderIndex(
      (sliderIndex - 1 + sliderContent.length) % sliderContent.length
    );
  };

  const handleNextClick = () => {
    setSliderIndex((sliderIndex + 1) % sliderContent.length);
  };

  return (
    <div className={classes.slider}>
      {sliderContent.map((slide, index) => (
        <div
          key={slide.id}
          className={`${classes.slide} ${
            index === sliderIndex ? classes.active : ""
          }`}
        >
          <img src={slide.image} alt={slide.alt} />
        </div>
      ))}
      <div className={classes.indicator}>
        <SliderIndicator
          sliderContent={sliderContent}
          sliderIndex={sliderIndex}
        />
      </div>
      <div className={classes.controls}>
        <button className={classes.prev_btn} onClick={handlePrevClick}>
          <CarretRightIcon />
        </button>
        <button className={classes.next_btn} onClick={handleNextClick}>
          <CarretLeftIcon />
        </button>
      </div>
    </div>
  );
};

export default PostSlider;
