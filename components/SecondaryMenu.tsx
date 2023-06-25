import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  backFromSubMenu,
  openTertiaryMenu,
  setTertiaryMenuTitle,
  selectedSecondaryMenu,
} from "@redux/features/menuSlice";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@public/assets/icons";
import TertiaryMenu from "./TertiaryMenu";
import { SecondaryMenuItems } from "@types";
import BackButton from "./BackButton";

const SecondaryMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isTertiaryMenuOpen = useAppSelector(
    state => state.menuReducer.isTertiaryMenuOpen
  );

  const tertiaryMenuTitle = useAppSelector(
    state => state.menuReducer.tertiaryMenuTitle
  );

  const secondaryMenuTitle = useAppSelector(
    state => state.menuReducer.secondaryMenuTitle
  );

  const mainMenuItems = useAppSelector(
    state => state.menuReducer.mainMenuItems
  );

  const handleSecondaryMenuItemClick = (clickedItem: SecondaryMenuItems) => {
    const selectedItem = mainMenuItems?.secondaryMenu.find(
      item => item.id === clickedItem.id
    );
    if (selectedItem) {
      dispatch(openTertiaryMenu(selectedItem.tertiaryMenu));
      dispatch(setTertiaryMenuTitle(clickedItem.title));
      dispatch(selectedSecondaryMenu(clickedItem));
    }
  };

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
    dispatch(setTertiaryMenuTitle(tertiaryMenuTitle));
  };

  return (
    <>
      {!isTertiaryMenuOpen ? (
        <>
          <BackButton handleClick={handleBackClick} name={secondaryMenuTitle} />
          <ul>
            {mainMenuItems?.secondaryMenu.map(item => (
              <li
                key={item.id}
                className="py-3 px-5 mr-5 hover:bg-blue-300 text-[18px] leading-[30px] cursor-pointer"
                onClick={() => handleSecondaryMenuItemClick(item)}
              >
                <div className="flex_between">
                  <div>{t(item.title)}</div>
                  <ArrowRightIcon />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <TertiaryMenu />
      )}
    </>
  );
};

export default SecondaryMenu;
