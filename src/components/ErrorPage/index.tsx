"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

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
    <div className="min-h-[80vh] w-full flex items-center justify-center p-4">
      <div
        className={clsx([
          "max-w-4xl w-full flex flex-col md:flex-row",
          "items-center justify-center gap-8 md:gap-16",
        ])}
      >
        <div className="relative flex items-center justify-center">
          <div
            className={clsx([
              "absolute w-56 h-56 bg-amber-100/50",
              "rounded-full blur-2xl animate-pulse",
            ])}
          />

          <div
            className={clsx([
              "relative w-44 h-44 md:w-52 md:h-52 rounded-full",
              "border-4 border-amber-800/30 bg-white flex",
              "items-center justify-center shadow-inner",
            ])}
          >
            <div className="text-amber-800/80 flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>

        <div
          className={clsx([
            "flex flex-col items-center md:items-start",
            "text-center md:text-left max-w-sm",
          ])}
        >
          <div
            className={clsx([
              "inline-block border border-zinc-300 bg-zinc-50/50",
              "text-zinc-600 font-quicksand text-xs font-bold",
              "uppercase tracking-wider px-4 py-1 rounded-full",
              "mb-4 shadow-sm",
            ])}
          >
            {title}
          </div>

          <h2
            className={clsx([
              "font-quicksand text-2xl md:text-3xl text-zinc-900",
              "font-bold tracking-tight leading-tight mb-3",
            ])}
          >
            {header}
          </h2>

          <p
            className={clsx([
              "font-quicksand text-sm md:text-base text-zinc-600",
              "font-medium leading-relaxed mb-6",
            ])}
          >
            {description}
          </p>

          <Link
            href="/"
            className={clsx([
              "w-full md:w-auto min-w-45 bg-battle-blue text-white",
              "font-quicksand font-bold flex items-center",
              "justify-center gap-2 px-6 py-3 rounded-2xl",
              "shadow-[0_4px_0_#1d4ed8] active:translate-y-1",
              "active:shadow-none transition-all duration-100",
              "select-none",
            ])}
          >
            <svg
              className="w-5 h-5 fill-current"
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
