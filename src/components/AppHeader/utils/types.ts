import { ICONS } from "./icons";

export interface NavigationItem {
  label: string;
  url: string;
  tooltip: string;
  icon: IconType;
}

export type IconType = keyof typeof ICONS;
