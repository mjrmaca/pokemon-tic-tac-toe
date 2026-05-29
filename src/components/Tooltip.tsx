import clsx from "clsx";
import { FC } from "react";

/**
 * NOTE
 * Make sure to add "group" and "relative" to the parent element's class attributes
 * The parent element tracks the hover bounding box area.
 */

interface TooltipProps {
  label: string;
}

const Tooltip: FC<TooltipProps> = ({ label }) => {
  return (
    <span
      className={clsx([
        "absolute top-full left-1/2 -translate-x-1/2 mt-2 scale-0 group-hover:scale-100",
        "transition-all duration-150 ease-out origin-top bg-zinc-900",
        "text-white font-quicksand text-xs font-semibold px-2.5 py-1.5",
        "rounded-md shadow-md whitespace-nowrap pointer-events-none z-50",
      ])}
    >
      {label}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-zinc-900" />
    </span>
  );
};

export default Tooltip;
