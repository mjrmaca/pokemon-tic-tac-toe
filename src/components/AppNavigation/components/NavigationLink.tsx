import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { ICONS } from "../utils/icons";
import { IconType } from "../utils/types";
import Tooltip from "../../Tooltip";

interface NavigationLinkProps {
  isActive: boolean;
  url: string;
  icon: IconType;
  tooltip: string;
  label?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  isActive,
  url,
  icon,
  tooltip,
  label,
}) => {
  return (
    <Link
      key={url}
      href={url}
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
        {ICONS[icon]}
      </span>
      {label}
      <Tooltip label={tooltip} />
    </Link>
  );
};

export default NavigationLink;
