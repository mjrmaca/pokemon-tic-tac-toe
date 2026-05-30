import { FC } from "react";
import ErrorPage from "../components/ErrorPage";

const NotFound: FC = () => {
  const questionMarkIcon = (
    <svg
      className="h-28 w-28 fill-none stroke-current md:h-36 md:w-36"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" className="fill-current" />
    </svg>
  );

  return (
    <ErrorPage
      title="PAGE NOT FOUND"
      header="Whoops! You're Lost."
      description="A wild 404 appeared! This page fled into the tall grass."
      icon={questionMarkIcon}
    />
  );
};

export default NotFound;
