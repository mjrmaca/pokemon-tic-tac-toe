import Link from "next/link";
import { FC, ReactNode } from "react";

interface PrimaryLinkProps {
  label: string;
  url: string;
  icon?: ReactNode;
}

const PrimaryLink: FC<PrimaryLinkProps> = ({ url, label, icon }) => {
  return (
    <Link
      href={url}
      className="bg-battle-blue font-quicksand flex w-full min-w-45 items-center
        justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-white
        shadow-[0_4px_0_#1d4ed8] transition-all duration-100 select-none
        hover:-translate-y-0.5 hover:shadow-[0_6px_0_#1d4ed8]
        active:translate-y-1 active:shadow-none md:w-auto"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default PrimaryLink;
