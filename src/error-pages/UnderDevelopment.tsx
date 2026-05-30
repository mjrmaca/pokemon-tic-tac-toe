"use client";

import { FC } from "react";
import ErrorPage from "../components/ErrorPage";

const UnderDevelopment: FC = () => {
  return (
    <ErrorPage
      title="Under Development"
      header="Something exciting is hatching!"
      description="Our Professors are working hard in the lab to bring this feature to
            life."
      icon={
        <svg
          className="w-20 h-20 md:w-24 md:h-24 stroke-current fill-none stroke-[2.5]"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C8 2 5 7 5 13.5C5 18 8.5 21 12 21C15.5 21 19 18 19 13.5C19 7 16 2 12 2Z"
          />

          <path strokeLinecap="round" d="M15 13C15 14.5 14 15.5 13.5 16" />
        </svg>
      }
    />
  );
};

export default UnderDevelopment;
