import classes from "./EventGrid.module.css";
import EventStep from "./EventStep";
import { dateFormatter } from "../../utils/utils";
const EventGrid = () => {
  const DUMMY_STEPS = [
    {
      eventTitle: "شروع فراخوان و دریافت پیشنهاد ها ",
      eventDate: dateFormatter("2024-02-07"),
      eventTime: "18:20",
    },
    {
      eventTitle: "پایان دریافت پیشنهاد ها و شروع کارشناسی پیشنهاد ها",
      eventDate: dateFormatter("2024-02-09"),
      eventTime: "18:20",
    },
    {
      eventTitle: "پایان کارشناسی پیشنهاد ها ",
      eventDate: dateFormatter("2024-02-11"),
      eventTime: "18:20",
    },
    {
      eventTitle: "اعلام نفرات برتر و پایان فراخوان",
      eventDate: dateFormatter("2024-02-13"),
      eventTime: "18:20",
    },
  ];

  return (
    <div className={classes.eventSteps}>
      {DUMMY_STEPS.map((step) => (
        <EventStep {...step} key={step.eventDate} />
      ))}
    </div>
  );
};

export default EventGrid;
