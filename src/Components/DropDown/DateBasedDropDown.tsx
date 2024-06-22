import { useState } from "react";
import classes from "./DateBasedDropDown.module.css";
import CarretRightIcon from "../Icons/CarretRightIcon";
import { DropDownOptionsType } from "../../models/types/types";

const dateDropDownOptions: DropDownOptionsType[] = [
  { label: "جدید ترین", value: "ascending" },
  { label: "قدیمی ترین", value: "descending" },
];

const DateBasedDropDown = () => {
  const [dropDownStatus, setDropDownStatus] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string>("جدید ترین");

  const handleClick = (value: string) => {
    setDropDownStatus((prevState) => !prevState);
    setSelectedLabel(value);
  };

  const renderSelectedLabel = (label: string) => {
    switch (label) {
      case "ascending":
        return "جدید ترین";
      case "descending":
        return "قدیمی ترین ";
      default:
        return label;
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
        <p>{renderSelectedLabel(selectedLabel)}</p>
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
