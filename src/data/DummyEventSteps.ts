import { dateFormatter } from "../utils/utils";
import { EventStepType } from "../models/types/types";
export const DUMMY_STEPS: EventStepType[] = [
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
