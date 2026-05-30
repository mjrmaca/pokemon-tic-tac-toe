import Link from "next/link";
import { IconType } from "../utils/types";
import { FC } from "react";
import clsx from "clsx";
import { NAVIGATION_ICONS } from "@/src/constants/icons";

interface NavigationPillProps {
  isActive: boolean;
  url: string;
  icon: IconType;
  label: string;
}

const NavigationPill: FC<NavigationPillProps> = ({
  isActive,
  url,
  icon,
  label,
}) => {
  return (
    <Link
      key={url}
      href={url}
      className="flex min-w-16 flex-col items-center gap-1 focus:outline-none"
    >
      <div
        className={clsx([
          "rounded-full px-5 py-1.5 transition-all duration-200",
          "fill-current stroke-current",
          isActive
            ? "text-battle-blue scale-105 bg-blue-100/70 shadow-sm"
            : "text-on-surface-variant hover:bg-zinc-100",
        ])}
      >
        {NAVIGATION_ICONS[icon]}
      </div>

      <span
        className={clsx([
          "font-quicksand text-xs font-bold transition-colors",
          isActive ? "text-battle-blue" : "text-on-surface-variant",
        ])}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavigationPill;
