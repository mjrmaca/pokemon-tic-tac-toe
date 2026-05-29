"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

interface GridCellProps {
  index: number;
  value: string | null;
  onClick: () => void;
}

const GridCell: FC<GridCellProps> = ({ index, value, onClick }) => {
  const ariaLabel = `Grid cell ${index + 1}, currently ${value || "empty"}`;

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx([
        "aspect-square w-full bg-surface-tile hover:bg-surface-bright",
        "border-b-8 border-tile-shadow flex items-center justify-center",
        "rounded-xl cursor-pointer transition-all duration-150 cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "active:translate-y-1 active:border-b-2 focus:outline-none",
      ])}
    >
      {value && (
        <div className="w-4/5 h-4/5 flex items-center justify-center animate-floating-bounce relative">
          <Image
            width={120}
            height={120}
            priority={index < 3}
            alt={`Pokemon ${value}`}
            className="mx-auto"
            src={`/images/pokemon/${value === "X" ? "pikachu" : "eevee"}.png`}
          />
        </div>
      )}
    </button>
  );
};

export default GridCell;
