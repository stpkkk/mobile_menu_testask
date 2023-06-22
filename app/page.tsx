"use client";
import { useState } from "react";
import { MainMenu } from "@/components";
import { BurgerMenuIcon } from "@public/icons";

export default function Home() {
  const [isOpenedMenu, setOpenedMenu] = useState(false);

  const handleClick = () => {
    setOpenedMenu(true);
  };

  return (
    <main>
      {isOpenedMenu ? (
        <MainMenu setOpenedMenu={setOpenedMenu} />
      ) : (
        <div
          className={`p-5 duration-1000 transition-all ease-out cursor-pointer ${
            isOpenedMenu ? "-translate-x-full" : "translate-x-0"
          }`}
          onClick={handleClick}
        >
          <BurgerMenuIcon />
        </div>
      )}
    </main>
  );
}
