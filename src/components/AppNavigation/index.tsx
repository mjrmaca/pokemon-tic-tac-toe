import { FC } from "react";
import { NAVIGATION_ITEMS } from "./utils/constants";
import { NavigationItem, NavigationType } from "./utils/types";
import { ICONS } from "./utils/icons";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NavigationLink from "./components/NavigationLink";

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
      {NAVIGATION_ITEMS.map((item: NavigationItem, index: number) => {
        const isActive = pathname === item.url;

        if (type === "footer") {
          return index > 2 ? null : (
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
          <NavigationLink
            key={item.url}
            isActive={isActive}
            url={item.url}
            icon={item.icon}
            label={item.label}
            tooltip={item.tooltip}
          />
        );
      })}
    </nav>
  );
};

export default AppNavigation;
