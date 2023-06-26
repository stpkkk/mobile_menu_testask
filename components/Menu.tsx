"use client";
import React, { useEffect, useState } from "react";
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

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="max-w-[360px] w-full">
      {hydrated && (
        <div
          onClick={e => e.stopPropagation()}
          className={`menu ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Header />
          <MainMenu />
        </div>
      )}
      {!isMenuOpen && (
        <div
          className="fixed z-40 m-3 p-3 duration-300 rounded-lg transition-shadow cursor-pointer hover:shadow-xl"
          onClick={handleClick}
        >
          <BurgerMenuIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;
