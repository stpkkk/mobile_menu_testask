import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { ArrowRightIcon } from "@public/assets/icons";
import { openSubMenu, toggleSecondaryMenu } from "@redux/features/menuSlice";
import { useTranslation } from "react-i18next";
import SecondaryMenu from "./SecondaryMenu";

const MainMenu: React.FC = ({ items }: any) => {
  const dispatch = useAppDispatch();

  const secondaryMenuItems = useAppSelector(
    state => state.menuReducer.menuItems[0].secondaryMenuItems
  );

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  const isMainMenuOpen = useAppSelector(
    state => state.menuReducer.isMainMenuOpen
  );

  const { t } = useTranslation();

  let parentTitle = "";

  const handleMainMenuItemClick = (item: any) => {
    dispatch(openSubMenu());
    parentTitle = item.title;
  };

  console.log(parentTitle);

  return (
    <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
      {isMainMenuOpen && (
        <ul>
          {items.map(item => (
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
      )}
      {isSecondaryMenuOpen && (
        <SecondaryMenu items={secondaryMenuItems} parentTitle={parentTitle} />
      )}
      <div className="font-medium text-[22px] leading-8 p-5">
        <div className="py-3 cursor-pointer">{t("Contacts")}</div>
        <div className="py-3 cursor-pointer">{t("Search")}</div>
      </div>
    </div>
  );
};

export default MainMenu;
