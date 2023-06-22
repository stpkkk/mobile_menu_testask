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
import { ArrowLeftIcon } from "@public/icons";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  const isTertiaryMenuOpen = useAppSelector(
    state => state.menuReducer.isTertiaryMenuOpen
  );

  const handleBackClick = () => {
    if (isTertiaryMenuOpen) {
      dispatch(closeTertiaryMenu());
    } else if (isSecondaryMenuOpen) {
      dispatch(closeSecondaryMenu());
    }
  };

  return (
    <div className="max-w-[360px] w-full p-5">
      <Header />
      <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
        <div className="max-w-[300px]">
          {isSecondaryMenuOpen || isTertiaryMenuOpen ? (
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleBackClick}
            >
              <ArrowLeftIcon />
              <p className="text-[22px] leading-[32px]">Back</p>
            </div>
          ) : null}
          {isTertiaryMenuOpen ? (
            <TertiaryMenu />
          ) : isSecondaryMenuOpen ? (
            <SecondaryMenu />
          ) : (
            <MainMenu />
          )}
        </div>

        {!isSecondaryMenuOpen && !isTertiaryMenuOpen ? (
          <div className="font-medium text-[22px] leading-8">
            <div className="py-3">Контакты</div>
            <div className="py-3">Поиск</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
