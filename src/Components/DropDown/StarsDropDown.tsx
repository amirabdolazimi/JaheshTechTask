import { ReactElement, useState } from "react";
import classes from "./StarsDropDown.module.css";
import CarretRightIcon from "../Icons/CarretRightIcon";
import FillStarIcon from "../Icons/FillStarIcon";
const FiveStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <span>5 ستاره</span>
    </div>
  );
};
const FourStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <span>4 ستاره</span>
    </div>
  );
};
const ThreeStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <span>3 ستاره</span>
    </div>
  );
};
const TwoStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <span>2 ستاره</span>
    </div>
  );
};

const OneStar = () => {
  return (
    <div>
      <FillStarIcon />
      <span>1 ستاره</span>
    </div>
  );
};
type DropDownOptionsType = {
  label: string | ReactElement;
  value: string;
};
const starsDropDownOptions: DropDownOptionsType[] = [
  { label: "همه پیشنهاد ها", value: "All" },
  { label: <FiveStar />, value: "5" },
  { label: <FourStar />, value: "4" },
  { label: <ThreeStar />, value: "3" },
  { label: <TwoStar />, value: "2" },
  { label: <OneStar />, value: "1" },
  { label: "بدون ستاره", value: "0" },
];
const StarsDropDown = () => {
  const [dropDownStatus, setDropDownStatus] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("همه پیشنهاد ها");
  // TODO:Write Logic for DropDown


  const handleClick = (value: string) => {
    setDropDownStatus((prevState) => !prevState);
    setSelectedValue(value);
  };
  const renderSelectedValue = (value: string) => {
    switch (value) {
      case "0":
        return "بدون ستاره";
      case "All":
        return "همه پیشنهاد ها ";
      default:
        return value;
    }
  };
  return (
    <div className={classes.dropDown}>
      <label>تعداد ستاره ها</label>
      <div
        onClick={() => {
          setDropDownStatus((prevState) => !prevState);
        }}
        className={classes.dropDownDefaultValue}
      >
        <p>{renderSelectedValue(selectedValue)}</p>
        <span>
          <CarretRightIcon />
        </span>
      </div>
      <div
        className={`${classes.optionsParent} ${
          dropDownStatus ? classes.showDropDown : classes.hideDropDown
        }`}
      >
        {starsDropDownOptions.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.value)}
              className={`${classes.option} ${
                item.value === "0" || ("All" && classes.goldTextColor)
              }`}
              key={item.value}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StarsDropDown;
