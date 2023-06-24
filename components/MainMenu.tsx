import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@public/assets/icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { openSecondaryMenu } from "@redux/features/menuSlice";
import SecondaryMenu from "./SecondaryMenu";
import { MenuItem } from "@types";

type Props = {
  items: MenuItem[];
};

const MainMenu: React.FC<Props> = ({ items }) => {
  const [parentTitle, setParentTitle] = useState<string>("");

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isMainMenuOpen = useAppSelector(
    state => state.menuReducer.isMainMenuOpen
  );

  const secondaryMenuItems = useAppSelector(
    state => state.menuReducer.menuItems[0].secondaryMenuItems
  );

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  const handleMainMenuItemClick = (clickedItem: MenuItem) => {
    const selectedItem = items.find(item => item.id === clickedItem.id);
    if (selectedItem) {
      dispatch(openSecondaryMenu(selectedItem.secondaryMenuItems));
      setParentTitle(clickedItem.title);
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
        <SecondaryMenu items={secondaryMenuItems} parentTitle={parentTitle} />
      )}
    </>
  );
};

export default MainMenu;
