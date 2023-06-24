import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  backFromSubMenu,
  closeTertiaryMenu,
  toggleTertiaryMenu,
} from "@redux/features/menuSlice";
import { ArrowLeftIcon, ArrowRightIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";

const SecondaryMenu: React.FC = ({ items, parentTitle }: any) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isSecondaryMenuOpen = useAppSelector(
    state => state.menuReducer.isSecondaryMenuOpen
  );

  useEffect(() => {
    if (!isSecondaryMenuOpen) {
      dispatch(closeTertiaryMenu());
    }
  }, [isSecondaryMenuOpen, dispatch]);

  const handleSecondaryMenuItemClick = (itemId: number) => {
    const selectedItem = items.find(
      (item: { id: number }) => item.id === itemId
    );
    if (selectedItem?.tertiaryMenuItems?.length > 0) {
      dispatch(toggleTertiaryMenu(selectedItem.tertiaryMenuItems));
    }
  };

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
  };

  return (
    <>
      <button
        className="flex items-center gap-3 cursor-pointer p-5 bg-transparent border-none outline-none"
        onClick={handleBackClick}
      >
        <ArrowLeftIcon />
        <p className="text-[22px] leading-[32px]">{t(parentTitle)}</p>
      </button>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            className="py-3 px-5 mr-5 hover:bg-blue-300 text-[18px] leading-[30px] cursor-pointer"
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
