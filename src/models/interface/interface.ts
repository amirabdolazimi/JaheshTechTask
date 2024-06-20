import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { PostType, SliderContentType } from "../types/types";
export interface IEventStep extends PropsWithChildren {
  eventTitle: string;
  eventTime: string;
  eventDate: string;
}

export interface IHorizontalProgressBar extends PropsWithChildren {
  stepPassed: number;
}
export interface IMinusIcon extends PropsWithChildren {
  handleClick: Dispatch<SetStateAction<boolean>>;
}
export interface IOutlinedStarIcon {
  value: string;
  handleRateValue: Dispatch<SetStateAction<number>>;
  handleShowModal: Dispatch<SetStateAction<boolean>>;
}
export interface IPlusIcon extends PropsWithChildren {
  handleClick: Dispatch<SetStateAction<boolean>>;
}
export interface IPagination extends PropsWithChildren {
  totalPosts: number;
  postPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}
export interface IPost extends PropsWithChildren {
  isWinner: boolean;
  personPicture: string;
  personName: string;
  postDate: string;
  postDescription: string;
  postTitle: string;
  sliderContent: SliderContentType[];
  setPosts: Dispatch<SetStateAction<PostType[]>>;
  posts: PostType[];
  id: number;
}
export interface IPostSlider extends PropsWithChildren {
  sliderContent: SliderContentType[];
}
export interface ISliderIndicator extends PropsWithChildren {
  sliderContent: SliderContentType[];
  sliderIndex: number;
}
export interface ISubmitRate extends PropsWithChildren {
  setPosts: Dispatch<SetStateAction<PostType[]>>;
  posts: PostType[];
  postId: number;
}
export interface ITabBar extends PropsWithChildren {
  layerSelectedTab: boolean;
  setLayerSelectedTab: Dispatch<SetStateAction<boolean>>;
}
export interface IVerticalProgressBar extends PropsWithChildren {
  stepPassed: number;
}
