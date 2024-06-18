import { useState } from "react";
import classes from "./Accordion.module.css";
import PlusIcon from "../Icons/PlusIcon";
import MinusIcon from "../Icons/MinusIcon";
const Accordion = () => {
  const [showAccordion, setShowAccordion] = useState<Boolean>(false);

  return (
    <div className={classes.accordion}>
      <div>
        {/* Minus SVG */}
        {showAccordion && <MinusIcon handleClick={setShowAccordion} />}
        {/* Plus SVG */}
        {!showAccordion && <PlusIcon handleClick={setShowAccordion} />}
        <h4>آیا نسخه آموزشی هم دارد ؟</h4>
      </div>

      <p className={`${showAccordion ? classes.show : classes.hidden}`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
    </div>
  );
};

export default Accordion;
