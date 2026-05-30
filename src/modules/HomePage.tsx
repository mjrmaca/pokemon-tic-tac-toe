"use client";

import Image from "next/image";
import { FC } from "react";
import PrimaryLink from "../components/PrimaryLink";

const HomePage: FC = () => {
  return (
    <div
      className="flex min-h-[80vh] w-full flex-col items-center justify-center
        bg-[#F8F8F4] p-4 select-none"
    >
      <div
        className="flex w-full max-w-sm flex-col items-center justify-center
          text-center"
      >
        <Image
          width={400}
          height={400}
          src="/images/pokemon/pikachu.png"
          alt="Active Pokemon"
        />

        <div className="flex max-w-xs flex-col gap-2">
          <h2
            className="font-quicksand text-2xl leading-tight font-bold
              tracking-tight text-[#403E1E] md:text-3xl"
          >
            Are you ready for a battle?
          </h2>

          <p
            className="font-quicksand text-sm leading-relaxed font-medium
              text-zinc-600 md:text-base"
          >
            Beat your rival and level up your Trainer Rank!
          </p>

          <PrimaryLink
            label="PLAY"
            subLabel="vs Computer or local friend"
            url="/battle"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
