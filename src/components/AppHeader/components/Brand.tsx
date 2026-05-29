import Image from "next/image";
import { FC } from "react";

const Brand: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        width={45}
        height={45}
        alt="Pokeball Logo"
        src="/images/pokeball.png"
      />
      <h1 className="font-quicksand text-xl md:text-2xl text-battle-blue font-bold tracking-tight">
        Pokémon Tic-Tac-Toe
      </h1>
    </div>
  );
};

export default Brand;
