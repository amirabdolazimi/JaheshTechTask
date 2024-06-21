import { useState } from "react";
import classes from "./DropDown.module.css";
import CarretRightIcon from "../Icons/CarretRightIcon";

const DropDown = ({ sortValue, items }) => {
  const [dropDownStatus, setDropDownStatus] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string>("");
  // TODO:Write Logic for DropDown
  // console.log(items);
  console.log("selectedValue : >>>>>", selectedValue);

  const handleClick = (value) => {
    setDropDownStatus((prevState) => !prevState);
    setSelectedValue(value);
    console.log("Value", value);
  };

  return (
    <div className={classes.dropDown}>
      <label>{sortValue}</label>
      <div
        onClick={() => {
          setDropDownStatus((prevState) => !prevState);
        }}
        className={classes.dropDownDefaultValue}
      >
        <p>{selectedValue ? selectedValue : items[0].label}</p>
        <span>
          <CarretRightIcon />
        </span>
      </div>
      <div
        className={`${classes.optionsParent} ${
          dropDownStatus ? classes.showDropDown : classes.hideDropDown
        }`}
      >
        {items.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.label)}
              className={`${classes.option} ${
                item.value === 0 || ("All" && classes.goldTextColor)
              }`}
              key={item.value}
            >
              <div value={item.value}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
