import { ChangeEvent, useState } from "react";
import classes from "./SortSelectBox.module.css";
import EducationTrophyIcon from "../Icons/EducationTrophyIcon";
import { ISortSelectBox } from "../../models/interface/interface";

const SortSelectBox: React.FC<ISortSelectBox> = ({ onSort }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onSort(isChecked);
  };

  return (
    <div className={classes.selectBox}>
      <label htmlFor="selectBox">فیلتر کردن بر اساس</label>
      <div className={classes.checkBox}>
        <input
          type="checkbox"
          id="selectBox"
          checked={isChecked}
          onChange={(event) => handleChange(event)}
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
