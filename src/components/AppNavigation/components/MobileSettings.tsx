import { NAVIGATION_ITEMS } from "../utils/constants";
import { FC } from "react";
import { usePathname } from "next/navigation";
import NavigationLink from "./NavigationLink";

const MobileSettings: FC = () => {
  const pathname = usePathname();
  const config = NAVIGATION_ITEMS.find((item) => item.label === "Settings");

  if (!config) return null;

  return (
    <div className="flex md:hidden">
      <NavigationLink
        isActive={pathname === config.url}
        url={config.url}
        icon={config.icon}
        tooltip={config.tooltip}
      />
    </div>
  );
};

export default MobileSettings;
