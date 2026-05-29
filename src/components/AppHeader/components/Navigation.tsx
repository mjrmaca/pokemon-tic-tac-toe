import { FC } from "react";
import { NAVIGATION_ITEMS } from "../utils/constants";
import { NavigationItem } from "../utils/types";
import { ICONS } from "../utils/icons";
import Link from "next/link";

const Navigation: FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAVIGATION_ITEMS.map((item: NavigationItem) => (
        <Link
          key={item.url}
          href={item.url}
          className="font-quicksand text-base text-primary flex items-center gap-2 hover:bg-surface-container-high transition-colors p-2 rounded-lg font-bold"
        >
          {ICONS[item.icon]}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
