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
      className="font-quicksand pointer-events-none absolute top-full left-1/2
        z-50 mt-2 origin-top -translate-x-1/2 scale-0 rounded-md bg-zinc-900
        px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap text-white
        shadow-md transition-all duration-150 ease-out group-hover:scale-100"
    >
      {label}
      <span
        className="absolute bottom-full left-1/2 -translate-x-1/2 border-4
          border-transparent border-b-zinc-900"
      />
    </span>
  );
};

export default Tooltip;
