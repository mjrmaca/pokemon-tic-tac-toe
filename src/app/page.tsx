"use client";

import { FC } from "react";
import GridCell from "../components/GridCell";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

const Home: FC = () => {
  return (
    <>
      <AppHeader />
      <div className="flex flex-col gap-4 m-auto">
        <span>POKEMON TIC TAC TOE COMPONENTS</span>
        <div className="flex gap-4">
          <GridCell
            index={0}
            value="X"
            onClick={() => console.log("clicked")}
          />
          <GridCell
            index={1}
            value="Y"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default Home;
