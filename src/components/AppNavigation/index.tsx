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
              className="flex min-w-16 flex-col items-center gap-1
                focus:outline-none"
            >
              <div
                className={clsx([
                  "rounded-full px-5 py-1.5 transition-all duration-200",
                  "fill-current stroke-current",
                  isActive
                    ? "bg-battle-blue scale-105 text-white shadow-sm"
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
              "group font-quicksand text-primary relative flex items-center",
              "hover:bg-surface-container-high gap-2 rounded-lg p-2 text-base",
              "font-bold transition-colors",
              isActive
                ? "text-battle-blue bg-surface-container-high font-bold"
                : "text-on-surface-variant font-semibold hover:bg-zinc-100",
            ])}
          >
            <span
              className={clsx([
                "flex items-center justify-center transition-colors",
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
