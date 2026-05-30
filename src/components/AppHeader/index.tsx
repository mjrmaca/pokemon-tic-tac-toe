"use client";

import { FC } from "react";
import AppNavigation from "../AppNavigation";
import Brand from "./components/Brand";

const AppHeader: FC = () => {
  return (
    <header className="bg-surface-bright w-full top-0 sticky border-b-4 border-gray-200 z-40">
      <div className="flex items-center justify-between px-2 md:px-4 py-4 max-w-7xl mx-auto">
        <Brand />
        <AppNavigation type="header" />
      </div>
    </header>
  );
};

export default AppHeader;
