import { NAVIGATION_ICONS } from "@/src/constants/icons";

export interface NavigationItem {
  label: string;
  url: string;
  tooltip: string;
  icon: IconType;
}

export type NavigationType = "header" | "footer";

export type IconType = keyof typeof NAVIGATION_ICONS;
