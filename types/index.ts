import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  btnType: "button" | "submit";
}
export interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  btnType: "button" | "submit";
}

export interface DesignProps {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  requirements: string[];
  constraints: string[];
  resources: string[];
  timeline: string[];
  weeklyTasks: WeeklyTask[];
}

export interface WeeklyTask {
  id: string;
  week: string;
  designId: string;
}
