import React from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  openSecondaryMenu,
  setSecondaryMenuTitle,
  selectedMainMenu,
} from "@redux/features/menuSlice";
import SecondaryMenu from "./SecondaryMenu";
import { ArrowRightIcon } from "@public/assets/icons";
import { MainMenu } from "@types";

const MainMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { isMainMenuOpen, isSecondaryMenuOpen, menu } = useAppSelector(
    state => state.menuReducer
  );

  const handleMainMenuItemClick = (clickedItem: MainMenu) => {
    const selectedItem = menu.find(item => item.id === clickedItem.id);
    if (selectedItem) {
      dispatch(openSecondaryMenu(selectedItem.secondaryMenu));
      dispatch(setSecondaryMenuTitle(clickedItem.title));
      dispatch(selectedMainMenu(clickedItem));
    }
  };

  return (
    <>
      {isMainMenuOpen && (
        <div className="flex flex-col justify-between h-[calc(100vh-8rem)] ">
          <ul>
            {menu.map(item => (
              <li
                key={item.id}
                className="font-medium text-[22px] list_item pr-10"
                onClick={() => handleMainMenuItemClick(item)}
              >
                <div className="flex_between">
                  <div className="break-words max-w-[270px]">
                    {t(item.title)}
                  </div>
                  <ArrowRightIcon />
                </div>
              </li>
            ))}
          </ul>
          <div className="font-medium text-[22px] leading-8 p-5">
            <div className="py-3 cursor-pointer">{t("Contacts")}</div>
            <div className="py-3 cursor-pointer">{t("Search")}</div>
          </div>
        </div>
      )}
      {isSecondaryMenuOpen && <SecondaryMenu />}
    </>
  );
};

export default MainMenu;
