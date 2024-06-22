import { ReactElement } from "react";

export type PostType = {
  id: number;
  isWinner: boolean;
  personPicture: string;
  earnedStars: number;
  personName: string;
  originalPostDate: string;
  postDate: string;
  postTitle: string;
  postDescription: string;
  sliderContent: SliderContentType[];
};

export type SliderContentType = {
  id: number;
  image: string;
  alt: string;
};
export type EventStepType = {
  eventTitle: string;
  eventTime: string;
  eventDate: string;
};
export type DropDownOptionsType = {
  label: string | ReactElement;
  value: string | number;
};
