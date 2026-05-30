import { FC } from "react";
import { NAVIGATION_ITEMS } from "./utils/constants";
import { NavigationItem, NavigationType } from "./utils/types";
import { ICONS } from "./utils/icons";
import Link from "next/link";
import clsx from "clsx";
import Tooltip from "../Tooltip";
import { usePathname } from "next/navigation";

interface AppNavigationProps {
  type: NavigationType;
}

const AppNavigation: FC<AppNavigationProps> = ({ type }) => {
  const pathname = usePathname();

  const className =
    type === "header"
      ? "hidden md:flex gap-8"
      : "flex md:hidden justify-around w-full";

  return (
    <nav className={clsx(["items-center gap-8", className])}>
      {NAVIGATION_ITEMS.map((item: NavigationItem) => {
        const isActive = pathname === item.url;

        if (type === "footer") {
          return (
            <Link
              key={item.url}
              href={item.url}
              className="flex flex-col items-center gap-1 min-w-16 focus:outline-none"
            >
              <div
                className={clsx([
                  "px-5 py-1.5 rounded-full transition-all duration-200",
                  "fill-current stroke-current",
                  isActive
                    ? "bg-battle-blue text-white shadow-sm scale-105"
                    : "text-on-surface-variant hover:bg-zinc-100",
                ])}
              >
                {ICONS[item.icon]}
              </div>

              <span
                className={clsx([
                  "font-quicksand text-xs font-bold transition-colors",
                  isActive ? "text-battle-blue" : "text-on-surface-variant",
                ])}
              >
                {item.label}
              </span>
            </Link>
          );
        }

        return (
          <Link
            key={item.url}
            href={item.url}
            className={clsx([
              "group relative font-quicksand text-base text-primary flex items-center",
              "gap-2 hover:bg-surface-container-high transition-colors p-2 rounded-lg font-bold",
              isActive
                ? "text-battle-blue font-bold bg-surface-container-high"
                : "text-on-surface-variant font-semibold hover:bg-zinc-100",
            ])}
          >
            <span
              className={clsx([
                "transition-colors flex items-center justify-center",
                "fill-current stroke-current",
                isActive ? "text-battle-blue" : "text-on-surface-variant",
              ])}
            >
              {ICONS[item.icon]}
            </span>
            {item.label}
            <Tooltip label={item.tooltip} />
          </Link>
        );
      })}
    </nav>
  );
};

export default AppNavigation;
