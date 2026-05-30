import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface PrimaryLinkProps {
  url: string;
  label: string;
  subLabel?: string;
  icon?: ReactNode;
  size?: "small" | "medium" | "large";
}

const PrimaryLink: FC<PrimaryLinkProps> = ({
  url,
  label,
  subLabel,
  icon,
  size = "small",
}) => {
  return (
    <Link
      href={url}
      className={clsx([
        "bg-battle-blue font-quicksand flex w-full min-w-45",
        "flex-col items-center justify-center",
        "font-bold text-white transition-all",
        "duration-100 select-none hover:-translate-y-0.5",
        "active:translate-y-1 active:shadow-none md:w-auto",
        size === "small" &&
          `gap-1 rounded-2xl px-6 py-3 shadow-[0_4px_0_#1d4ed8]
          hover:shadow-[0_6px_0_#1d4ed8]`,
        size === "large" &&
          `gap-2 rounded-3xl px-8 py-6 shadow-[0_8px_0_#1d4ed8]
          hover:shadow-[0_12px_0_#1d4ed8]`,
      ])}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span
          className={clsx([
            size === "small" && "text-md",
            size === "large" && "text-3xl",
          ])}
        >
          {label}
        </span>
      </div>
      {subLabel && (
        <span
          className="mt-0.5 text-[10px] font-bold tracking-widest uppercase
            opacity-80 md:text-xs"
        >
          {subLabel}
        </span>
      )}
    </Link>
  );
};

export default PrimaryLink;
