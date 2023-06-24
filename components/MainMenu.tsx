import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  openSecondaryMenu,
  setBackButtonTitle,
  setSelectedMainMenuItem,
} from "@redux/features/menuSlice";
import { useTranslation } from "react-i18next";
import SecondaryMenu from "./SecondaryMenu";
import { ArrowRightIcon } from "@public/assets/icons";
import { MenuItem } from "@types";

type Props = {
  items: MenuItem[];
};

const MainMenu: React.FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isMainMenuOpen = useAppSelector(
    state => state.menuReducer.isMainMenuOpen
  );

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  const selectedMainMenuItem = useAppSelector(
    state => state.menuReducer.selectedMainMenuItem
  );

  const handleMainMenuItemClick = (clickedItem: MenuItem) => {
    const selectedItem = items.find(item => item.id === clickedItem.id);
    if (selectedItem) {
      dispatch(openSecondaryMenu(selectedItem.secondaryMenu));
      dispatch(setBackButtonTitle(clickedItem.title));
      dispatch(setSelectedMainMenuItem(clickedItem));
    }
  };

  return (
    <>
      {isMainMenuOpen && (
        <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
          <ul>
            {items.map(item => (
              <li
                key={item.id}
                className="font-medium text-[22px] leading-8 cursor-pointer py-3 px-5 mr-5 hover:bg-blue-300"
                onClick={() => handleMainMenuItemClick(item)}
              >
                <div className="flex items-center justify-between">
                  <div>{t(item.title)}</div>
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
      {isSecondaryMenuOpen && (
        <SecondaryMenu items={selectedMainMenuItem?.secondaryMenu || []} />
      )}
    </>
  );
};

export default MainMenu;
