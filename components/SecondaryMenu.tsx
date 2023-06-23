import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { backFromSubMenu, toggleTertiaryMenu } from "@redux/features/menuSlice";
import { ArrowLeftIcon, ArrowRightIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";

const SecondaryMenu: React.FC = ({ items, parentTitle }: any) => {
  const dispatch = useAppDispatch();

  // const secondaryMenuItems = useAppSelector(
  //   state => state.menuReducer.secondaryMenuItems
  // );

  const { t } = useTranslation();

  const handleSecondaryMenuItemClick = (itemId: number) => {
    const selectedItem = items.find(item => item.id === itemId);
    if (
      selectedItem &&
      selectedItem.tertiaryMenuItems &&
      selectedItem.tertiaryMenuItems.length > 0
    ) {
      dispatch(toggleTertiaryMenu(selectedItem.tertiaryMenuItems));
    }
  };

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
  };

  return (
    <>
      <div
        className="flex items-center gap-3 cursor-pointer p-5"
        onClick={handleBackClick}
      >
        <ArrowLeftIcon />
        <p className="text-[22px] leading-[32px]">{parentTitle}</p>
      </div>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            className=" py-3 px-5 mr-5 hover:bg-blue-300 text-[18px] leading-[30px] cursor-pointer"
            onClick={() => handleSecondaryMenuItemClick(item.id)}
          >
            <div className="flex_between">
              <div>{t(item.title)}</div>
              <ArrowRightIcon />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SecondaryMenu;
