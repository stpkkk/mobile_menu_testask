import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toggleTertiaryMenu } from "@redux/features/menuSlice";
import { ArrowRightIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";

const SecondaryMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const secondaryMenuItems = useAppSelector(
    state => state.menuReducer.secondaryMenuItems
  );

  const { t } = useTranslation();

  const handleSecondaryMenuItemClick = (itemId: number) => {
    const selectedItem = secondaryMenuItems.find(item => item.id === itemId);
    if (
      selectedItem &&
      selectedItem.tertiaryMenuItems &&
      selectedItem.tertiaryMenuItems.length > 0
    ) {
      dispatch(toggleTertiaryMenu(selectedItem.tertiaryMenuItems));
    }
  };

  return (
    <ul>
      {secondaryMenuItems.map(item => (
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
  );
};

export default SecondaryMenu;
