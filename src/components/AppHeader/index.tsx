"use client";

import { FC } from "react";
import AppNavigation from "../AppNavigation";
import Brand from "./components/Brand";

const AppHeader: FC = () => {
  return (
    <header
      className="bg-surface-bright sticky top-0 z-40 w-full border-b-4
        border-gray-200"
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4
          md:px-4"
      >
        <Brand />
        <AppNavigation type="header" />
      </div>
    </header>
  );
};

export default AppHeader;
