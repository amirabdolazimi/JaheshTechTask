import { useState } from "react";
import classes from "./SortSelectBox.module.css";
import EducationTrophyIcon from "../Icons/EducationTrophyIcon";
const SortSelectBox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  console.log(isChecked);

  return (
    <div className={classes.selectBox}>
      <label htmlFor="selectBox">فیلتر کردن بر اساس</label>
      <div
        className={classes.checkBox}
        onClick={() => setIsChecked((prevState) => !prevState)}
      >
        <input
          type="checkbox"
          id="selectBox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        <div>
          <span>
            <EducationTrophyIcon />
          </span>
          <p>فقط پیشنهاد های برنده</p>
        </div>
      </div>
    </div>
  );
};

export default SortSelectBox;
