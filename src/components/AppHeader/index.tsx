"use client";

import clsx from "clsx";
import { FC } from "react";
import Navigation from "./components/Navigation";
import Brand from "./components/Brand";

const AppHeader: FC = () => {
  return (
    <header className="bg-surface-bright w-full top-0 sticky border-b-4 border-gray-200 z-40">
      <div
        className={clsx([
          "flex items-center justify-between px-2 md:px-4 py-4 max-w-7xl mx-auto",
        ])}
      >
        <Brand />
        <Navigation />
      </div>
    </header>
  );
};

export default AppHeader;
