"use client";

import Image from "next/image";
import { FC } from "react";
import PrimaryLink from "../components/PrimaryLink";
import TitlePill from "../components/TitlePill";

const HomePage: FC = () => {
  return (
    <div
      className="flex min-h-[80vh] w-full flex-col items-center justify-center
        bg-[#F8F8F4] p-4 select-none"
    >
      <div
        className="flex w-full max-w-sm flex-col items-center justify-center
          gap-6 text-center"
      >
        <div
          className="flex h-48 w-48 flex-col items-center justify-center gap-3
            rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm md:h-56
            md:w-56"
        >
          <div className="relative flex h-60 w-60 items-center justify-center">
            <Image
              src="/images/pokemon/pikachu.png"
              alt="Pikachu"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <TitlePill isActive title="ACTIVE POKEMON" />

        <div className="flex max-w-xs flex-col gap-2">
          <h2
            className="font-quicksand text-2xl leading-tight font-bold
              tracking-tight text-[#403E1E] md:text-3xl"
          >
            Ready for a battle?
          </h2>

          <p
            className="font-quicksand text-sm leading-relaxed font-medium
              text-zinc-600 md:text-base"
          >
            Beat your rival and level up your Trainer Rank!
          </p>
        </div>

        <PrimaryLink
          label="PLAY"
          subLabel="vs Computer or local friend"
          url="/battle"
          size="large"
        />
      </div>
    </div>
  );
};

export default HomePage;
