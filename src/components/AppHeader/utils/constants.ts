import { NavigationItem } from "./types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Battle",
    url: "/battle",
    icon: "gamepad",
    tooltip: "Enter the battle arena",
  },
  {
    label: "Collection",
    url: "/collection",
    icon: "layer-group",
    tooltip: "View your Pokémon collection",
  },
  {
    label: "History",
    url: "/history",
    icon: "clock-rotate-left",
    tooltip: "Check match history",
  },
];
