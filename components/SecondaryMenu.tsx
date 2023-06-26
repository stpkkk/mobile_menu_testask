import React from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  backFromSubMenu,
  openTertiaryMenu,
  setTertiaryMenuTitle,
  selectedSecondaryMenu,
} from "@redux/features/menuSlice";
import { ArrowRightIcon } from "@public/assets/icons";
import TertiaryMenu from "./TertiaryMenu";
import { SecondaryMenuItems } from "@types";
import BackButton from "./BackButton";

const SecondaryMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    isTertiaryMenuOpen,
    tertiaryMenuTitle,
    secondaryMenuTitle,
    mainMenuItems,
  } = useAppSelector(state => state.menuReducer);

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
                className="text-[18px] leading-[30px] list_item pr-10"
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
