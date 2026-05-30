import clsx from "clsx";
import { FC } from "react";

interface TitlePillProps {
  title: string;
  isActive?: boolean;
}

const TitlePill: FC<TitlePillProps> = ({ title, isActive }) => {
  return (
    <div
      className={clsx([
        "font-quicksand mb-4 inline-block rounded-full border",
        "px-4 py-1 text-xs font-bold",
        "tracking-wider text-zinc-600 shadow-sm",
        isActive
          ? "border-blue-200 bg-blue-100/70"
          : "border-zinc-300 bg-zinc-50/50",
      ])}
    >
      {title}
    </div>
  );
};

export default TitlePill;
