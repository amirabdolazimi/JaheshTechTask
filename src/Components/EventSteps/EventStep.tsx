import classes from "./EventStep.module.css";
import { IEventStep } from "../../models/interface/interface";
const EventStep: React.FC<IEventStep> = ({
  eventTime,
  eventTitle,
  eventDate,
}) => {
  return (
    <div className={classes.eventStep}>
      <div className={classes.eventTitle}>{eventTitle}</div>
      <div className={classes.eventDetail}>
        <div className={classes.eventDate}>{eventDate}</div>
        <div className={classes.eventTime}>
          <span>ساعت</span>
          <span>{eventTime}</span>
        </div>
      </div>
    </div>
  );
};

export default EventStep;
