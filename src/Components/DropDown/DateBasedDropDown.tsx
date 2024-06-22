import { useState } from "react";
import classes from "./DateBasedDropDown.module.css";
import CarretRightIcon from "../Icons/CarretRightIcon";
// TODO:Write Logic for DropDown

type DropDownOptionsType = {
  label: string;
  value: string;
};
const dateDropDownOptions: DropDownOptionsType[] = [
  { label: "جدید ترین", value: "new" },
  { label: "قدیمی ترین", value: "old" },
];

const DateBasedDropDown = () => {
  const [dropDownStatus, setDropDownStatus] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("جدید ترین");

  const handleClick = (value: string) => {
    setDropDownStatus((prevState) => !prevState);
    setSelectedValue(value);
  };

  const renderSelectedValue = (value: string) => {
    switch (value) {
      case "new":
        return "جدید ترین";
      case "old":
        return "قدیمی ترین ";
      default:
        return value;
    }
  };
  return (
    <div className={classes.dropDown}>
      <label>مرتب کردن بر اساس</label>
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
        {dateDropDownOptions.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.value)}
              className={classes.option}
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

export default DateBasedDropDown;
