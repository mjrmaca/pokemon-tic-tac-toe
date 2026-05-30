"use client";

import { FC } from "react";
import AppNavigation from "./AppNavigation";

const AppFooter: FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 md:hidden bg-surface-bright border-t-4 border-gray-200 z-40">
      <div className="flex items-center justify-center px-2 py-2 max-w-7xl mx-auto">
        <AppNavigation type="footer" />
      </div>
    </footer>
  );
};

export default AppFooter;
