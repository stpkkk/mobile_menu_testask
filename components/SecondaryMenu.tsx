import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  openTertiaryMenu,
  setBackButtonTitle,
  setSelectedSecondaryMenuItem,
} from "@redux/features/menuSlice";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@public/assets/icons";
import TertiaryMenu from "./TertiaryMenu";
import BackButton from "./BackButton";
import { SecondaryMenuItem } from "@types";

type Props = {
  items: SecondaryMenuItem[];
};

const SecondaryMenu: React.FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isTertiaryMenuOpen = useAppSelector(
    state => state.menuReducer.isTertiaryMenuOpen
  );
  const selectedSecondaryMenuItem = useAppSelector(
    state => state.menuReducer.selectedSecondaryMenuItem
  );

  const handleSecondaryMenuItemClick = (clickedItem: SecondaryMenuItem) => {
    const selectedItem = items.find(item => item.id === clickedItem.id);
    if (selectedItem) {
      dispatch(openTertiaryMenu(selectedItem.tertiaryMenu));
      dispatch(setBackButtonTitle(clickedItem.title));
      dispatch(setSelectedSecondaryMenuItem(clickedItem));
    }
  };

  return (
    <>
      {!isTertiaryMenuOpen ? (
        <>
          <BackButton />
          <ul>
            {items.map(item => (
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
        <TertiaryMenu items={selectedSecondaryMenuItem?.tertiaryMenu || []} />
      )}
    </>
  );
};

export default SecondaryMenu;
