"use client";

import { FC } from "react";
import AppNavigation from "./AppNavigation";

const AppFooter: FC = () => {
  return (
    <footer
      className="bg-surface-bright fixed right-0 bottom-0 left-0 z-40 border-t-4
        border-gray-200 md:hidden"
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-center px-2 py-2"
      >
        <AppNavigation type="footer" />
      </div>
    </footer>
  );
};

export default AppFooter;
