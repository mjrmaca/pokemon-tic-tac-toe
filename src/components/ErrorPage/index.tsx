"use client";

import { FC, ReactNode } from "react";
import PrimaryLink from "../PrimaryLink";
import { HOME_ICON } from "@/src/constants/icons";
import TitlePill from "../TitlePill";

interface ErrorPageProps {
  title: string;
  header: string;
  description: string;
  icon: ReactNode;
}

const ErrorPage: FC<ErrorPageProps> = ({
  title,
  header,
  icon,
  description,
}) => {
  return (
    <div
      className="flex min-h-[80vh] w-full items-center justify-center p-4
        select-none"
    >
      <div
        className="flex w-full max-w-4xl flex-col items-center justify-center
          gap-8 md:flex-row md:gap-16"
      >
        <div className="relative flex items-center justify-center">
          <div
            className="absolute h-56 w-56 animate-pulse rounded-full
              bg-amber-100/50 blur-2xl"
          />

          <div
            className="relative flex h-44 w-44 items-center justify-center
              rounded-full border-4 border-amber-800/30 bg-white shadow-inner
              md:h-52 md:w-52"
          >
            <div className="flex items-center justify-center text-amber-800/80">
              {icon}
            </div>
          </div>
        </div>

        <div
          className="flex max-w-sm flex-col items-center text-center
            md:items-start md:text-left"
        >
          <TitlePill title={title} />

          <h2
            className="font-quicksand mb-3 text-2xl leading-tight font-bold
              tracking-tight text-zinc-900 md:text-3xl"
          >
            {header}
          </h2>

          <p
            className="font-quicksand mb-6 text-sm leading-relaxed font-medium
              text-zinc-600 md:text-base"
          >
            {description}
          </p>

          <PrimaryLink label="Back to Home" url="/" icon={HOME_ICON} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
