import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Brand: FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 select-none md:gap-4">
      <Image
        width={45}
        height={45}
        alt="Pokeball Logo"
        src="/images/pokeball.png"
      />
      <h1
        className="font-quicksand text-xl font-bold tracking-tight text-zinc-800
          md:text-2xl"
      >
        Pokémon Tic-Tac-Toe
      </h1>
    </Link>
  );
};

export default Brand;
