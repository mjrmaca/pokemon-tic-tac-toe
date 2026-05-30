"use client";

import { FC, ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default AppLayout;
