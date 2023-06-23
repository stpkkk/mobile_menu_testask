import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  closeSecondaryMenu,
  closeTertiaryMenu,
} from "@redux/features/menuSlice";
import TertiaryMenu from "./TertiaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import MainMenu from "./MainMenu";
import Header from "./Header";
import { ArrowLeftIcon } from "@public/assets/icons";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();

  const mainMenuItems = useAppSelector(state => state.menuReducer.menuItems);

  // const isSecondaryMenuOpen = useAppSelector(
  //   state => state.menuReducer.isSecondaryMenuOpen
  // );

  // const isMainMenuOpen = useAppSelector(
  //   state => state.menuReducer.isMainMenuOpen
  // );

  // const secondaryMenuItems = useAppSelector(
  //   state => state.menuReducer.secondaryMenuItems
  // );

  // const isTertiaryMenuOpen = useAppSelector(
  //   state => state.menuReducer.isTertiaryMenuOpen
  // );

  // const handleBackClick = () => {
  //   if (isTertiaryMenuOpen) {
  //     dispatch(closeTertiaryMenu());
  //   } else if (isSecondaryMenuOpen) {
  //     dispatch(closeSecondaryMenu());
  //   }
  // };

  return (
    <div className="max-w-[360px] w-full">
      <Header />
      {/* {isSecondaryMenuOpen || isTertiaryMenuOpen ? (
        <div
          className="flex items-center gap-3 cursor-pointer p-5"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon />
          <p className="text-[22px] leading-[32px]">Back</p>
        </div>
      ) : null} */}
      {/* {isTertiaryMenuOpen ? (
        <TertiaryMenu />
      ) : isSecondaryMenuOpen ? (
        <SecondaryMenu items={secondaryMenuItems} />
      ) : ( */}
      <MainMenu items={mainMenuItems} />
      {/* )} */}
    </div>
  );
};

export default Menu;
