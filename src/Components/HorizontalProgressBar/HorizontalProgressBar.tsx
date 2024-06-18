import { PropsWithChildren } from "react";
import classes from "./HorizontalProgressBar.module.css";

interface IHorizontalProgressBar extends PropsWithChildren {
  stepPassed: number;
}

const HorizontalProgressBar: React.FC<IHorizontalProgressBar> = ({
  stepPassed,
}) => {
  console.log(stepPassed);

  return (
    <div
      className={`${classes.progress_container} ${
        stepPassed === 1 && classes.progress_25
      }
      ${stepPassed === 2 && classes.progress_50}
      ${stepPassed === 3 && classes.progress_75}      
      ${stepPassed >= 4 && classes.progress_100}

      `}
    >
      <div className={classes.progress_step}>
        <div
          className={`${classes.circle} ${
            stepPassed >= 1 ? classes.fill_circle : classes.empty_circle
          }`}
        ></div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.progress_step}>
        <div
          className={`${classes.circle} ${
            stepPassed >= 2 ? classes.fill_circle : classes.empty_circle
          }`}
        ></div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.progress_step}>
        <div
          className={`${classes.circle} ${
            stepPassed >= 3 ? classes.fill_circle : classes.empty_circle
          }`}
        ></div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.progress_step}>
        <div
          className={`${classes.circle} ${
            stepPassed >= 4 ? classes.fill_circle : classes.empty_circle
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HorizontalProgressBar;
