"use client";

import { FC } from "react";
import ErrorPage from "../components/ErrorPage";

const UnderDevelopment: FC = () => {
  const eggIcon = (
    <svg
      className="h-20 w-20 fill-none stroke-current stroke-[2.5] md:h-24
        md:w-24"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2C8 2 5 7 5 13.5C5 18 8.5 21 12 21C15.5 21 19 18 19 13.5C19 7 16 2 12 2Z"
      />

      <path strokeLinecap="round" d="M15 13C15 14.5 14 15.5 13.5 16" />
    </svg>
  );

  return (
    <ErrorPage
      title="UNDER DEVELOPMENT"
      header="Something exciting is hatching!"
      description="Our Professors are working hard in the lab to bring this feature to
            life."
      icon={eggIcon}
    />
  );
};

export default UnderDevelopment;
