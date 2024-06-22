import { useState } from "react";
import TabBar from "../Components/TabBar/TabBar";
import classes from "./Layout.module.css";
import EventDetailsPage from "../Pages/EventDetailsPage/EventDetailsPage";
import EventSuggestionPage from "../Pages/EventSuggestionPage/EventSuggestionPage";

const Layout = () => {
  const [layerTabSelected, setLayerTabSelected] = useState<boolean>(false);

  return (
    <div className={classes.layout}>
      <h1 className={classes.title}>
        فراخوان حل چالش کدنویسی همکاران سیستم به زبان پایتون
      </h1>
      <TabBar
        layerSelectedTab={layerTabSelected}
        setLayerSelectedTab={setLayerTabSelected}
      />
      {!layerTabSelected ? <EventDetailsPage /> : <EventSuggestionPage />}
    </div>
  );
};

export default Layout;
