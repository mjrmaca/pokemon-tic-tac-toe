import { FC } from "react";
import { NAVIGATION_ITEMS } from "./utils/constants";
import { NavigationItem, NavigationType } from "./utils/types";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NavigationLink from "./components/NavigationLink";
import NavigationPill from "./components/NavigationPill";

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
    <nav className={clsx(["items-center gap-8 select-none", className])}>
      {NAVIGATION_ITEMS.map((item: NavigationItem, index: number) => {
        const isActive = pathname === item.url;

        if (type === "footer") {
          return index > 2 ? null : (
            <NavigationPill
              key={item.url}
              isActive={isActive}
              url={item.url}
              icon={item.icon}
              label={item.label}
            />
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
