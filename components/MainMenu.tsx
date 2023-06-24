import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { ArrowRightIcon } from "@public/assets/icons";
import { toggleSecondaryMenu } from "@redux/features/menuSlice";
import { useTranslation } from "react-i18next";
import SecondaryMenu from "./SecondaryMenu";

const MainMenu: React.FC = ({ items }) => {
  const [parentTitle, setParentTitle] = useState("");

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const secondaryMenuItems = useAppSelector(
    state => state.menuReducer.menuItems[0].secondaryMenuItems
  );

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  const isMainMenuOpen = useAppSelector(
    state => state.menuReducer.isMainMenuOpen
  );

  const handleMainMenuItemClick = (clickedItem: any) => {
    const selectedItem = items.find(
      (item: { id: number }) => item.id === clickedItem.id
    );

    dispatch(toggleSecondaryMenu(selectedItem.secondaryMenuItems));
    setParentTitle(clickedItem.title);
  };

  return (
    <>
      {isMainMenuOpen && (
        <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
          <ul>
            {items.map((item: MenuItemTypes) => (
              <li
                key={item.id}
                className="font-medium text-[22px] leading-8 cursor-pointer py-3 px-5 mr-5 hover:bg-blue-300"
                onClick={() => handleMainMenuItemClick(item)}
              >
                <div className="flex_between">
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
        <SecondaryMenu items={secondaryMenuItems} parentTitle={parentTitle} />
      )}
    </>
  );
};

export default MainMenu;
