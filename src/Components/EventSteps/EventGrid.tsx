import classes from "./EventGrid.module.css";
import EventStep from "./EventStep";
import { DUMMY_STEPS } from "../../data/DummyEventSteps";
const EventGrid = () => {
  return (
    <div className={classes.eventSteps}>
      {DUMMY_STEPS.map((step) => (
        <EventStep {...step} key={step.eventDate} />
      ))}
    </div>
  );
};

export default EventGrid;
