import classes from "./TabBar.module.css";
import LayersIcon from "../Icons/LayersIcon";
import FileIcon from "../Icons/FileIcon";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface ITabBar extends PropsWithChildren {
  layerSelectedTab: Boolean;
  setLayerSelectedTab: Dispatch<SetStateAction<boolean>>;
}

// TODO : Fix Tabbar UI Bug , When Zoom in and Zoom out
const TabBar: React.FC<ITabBar> = ({
  layerSelectedTab,
  setLayerSelectedTab,
}) => {
  return (
    <div className={classes.tabbar}>
      <div
        className={`${classes.fileIcon} ${
          !layerSelectedTab && classes.selectedTab
        }`}
        onClick={() => {
          setLayerSelectedTab(false);
        }}
      >
        {/* File Icon */}
        <FileIcon />
        <span>توضیحات</span>
      </div>
      <div
        className={`${classes.layerIcon} ${
          layerSelectedTab && classes.selectedTab
        }`}
        onClick={() => {
          setLayerSelectedTab(true);
        }}
      >
        {/* Layers Icon */}
        <LayersIcon />
        <span>پیشنهاد ها </span>
      </div>
    </div>
  );
};

export default TabBar;
