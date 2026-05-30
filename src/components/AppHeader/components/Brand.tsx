import Image from "next/image";
import { FC } from "react";
import Tooltip from "../../Tooltip";
import Link from "next/link";

const Brand: FC = () => {
  return (
    <Link href="/" className="group relative flex items-center gap-4">
      <Image
        width={45}
        height={45}
        alt="Pokeball Logo"
        src="/images/pokeball.png"
      />
      <h1
        className="font-quicksand text-battle-blue text-xl font-bold
          tracking-tight md:text-2xl"
      >
        Pokémon Tic-Tac-Toe
      </h1>

      <Tooltip label="Go to Home" />
    </Link>
  );
};

export default Brand;
