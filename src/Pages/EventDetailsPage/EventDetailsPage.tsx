import EventGrid from "../../Components/EventSteps/EventGrid";
import VerticalProgressBar from "../../Components/VerticalProgressBar/VerticalProgressBar";
import TestVideo from "/videos/1.mp4";

import classes from "./EventDetailsPage.module.css";
import Accordion from "../../Components/Accordion/Accordion";
import JaheshIcon from "../../Components/Icons/JaheshIcon";
import HorizontalProgressBar from "../../Components/HorizontalProgressBar/HorizontalProgressBar";
const EventDetailsPage = () => {
  const EventsStepPassed: number = 4;
  return (
    <div className={classes.contest}>
      <section>
        <div className={classes.eventsSection}>
          <span className={classes.jahesh}>
            <JaheshIcon />
          </span>
          <div className={classes.events}>
            <HorizontalProgressBar stepPassed={EventsStepPassed} />
            <VerticalProgressBar stepPassed={EventsStepPassed} />
            <EventGrid />
          </div>
        </div>
      </section>

      <section>
        {/* Description Section */}
        <div className={classes.description}>
          <span className={classes.jahesh}>
            <JaheshIcon />
            <h2>معرفی فراخوان</h2>
          </span>
          <p>به تابستون چلنج خوش اومدی!</p>
          <p>
            تابستون چلنج برای همه‌ست. جونیور یا سنیور، محصل یا شاغل، بک یا
            فرانت، فرقی نداره؛ چون قراره تو تابستون‌چلنج به همه‌مون خوش بگذره و
            باهم تفریح کنیم.
          </p>
          <p>
            7 روز، 7 چالش؛ هر روز با یک چالش متفاوت و باحال روبه‌رو میشی. سطح
            بعضی از چالش‌ها آسونه و بعضی‌هاش هم متوسط یا یکم سخته و خلاصه همه
            مدل چالشی داریم.
          </p>
        </div>
      </section>
      <section>
        {/* Video Section */}
        <div className={classes.videoSection}>
          <span className={classes.jahesh}>
            <JaheshIcon />
            <h2> ویدیو معرفی فراخوان </h2>
          </span>
          <div className={classes.video}>
            <video controls>
              <source src={TestVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <span className={classes.jahesh}>
            <JaheshIcon />
            <h2> سوالات متداول </h2>
          </span>
        </div>
      </section>
      <section className={classes.accordions}>
        {/* TODO : Write Dummy_Data for Accordions */}
        {/* Accordions */}
        <Accordion />
        <Accordion />
        <Accordion />
      </section>
    </div>
  );
};

export default EventDetailsPage;
