"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import MainMenu from "./MainMenu";
import Header from "./Header";
import { toggleMenu } from "@redux/features/menuSlice";
import { BurgerMenuIcon } from "@public/assets/icons";

const Menu: React.FC = () => {
  const isMenuOpen = useAppSelector(state => state.menuReducer.isMenuOpen);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="max-w-[360px] w-full">
      {isMenuOpen ? (
        <>
          <Header />
          <MainMenu />
        </>
      ) : (
        <div
          className={`p-5 duration-1000 transition-all ease-out cursor-pointer ${
            isMenuOpen ? "-translate-x-full" : "translate-x-0"
          }`}
          onClick={handleClick}
        >
          <BurgerMenuIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;
