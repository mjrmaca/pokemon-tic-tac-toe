"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";

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
          <div
            className="font-quicksand mb-4 inline-block rounded-full border
              border-zinc-300 bg-zinc-50/50 px-4 py-1 text-xs font-bold
              tracking-wider text-zinc-600 shadow-sm"
          >
            {title}
          </div>

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

          <Link
            href="/"
            className="bg-battle-blue font-quicksand flex w-full min-w-45
              items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold
              text-white shadow-[0_4px_0_#1d4ed8] transition-all duration-100
              select-none hover:-translate-y-0.5 hover:shadow-[0_6px_0_#1d4ed8]
              active:translate-y-1 active:shadow-none md:w-auto"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 -960 960 960"
              aria-hidden="true"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-60 60v-480l300-240 300 240v480H540v-240H420v240H180Zm300-330Z" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
