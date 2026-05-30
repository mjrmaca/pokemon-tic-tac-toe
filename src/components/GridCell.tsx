"use client";

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
      className="bg-surface-tile hover:bg-surface-bright border-tile-shadow
        cubic-bezier(0.175, 0.885, 0.32, 1.275) flex aspect-square w-full
        cursor-pointer items-center justify-center rounded-xl border-b-8
        transition-all duration-150 focus:outline-none active:translate-y-1
        active:border-b-2"
    >
      {value && (
        <div
          className="animate-floating-bounce relative flex h-4/5 w-4/5
            items-center justify-center"
        >
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
