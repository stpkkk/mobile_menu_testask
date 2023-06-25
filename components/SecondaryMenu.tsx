import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  backFromSubMenu,
  openTertiaryMenu,
  setTertiaryMenuTitle,
  setSecondaryMenuItems,
} from "@redux/features/menuSlice";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@public/assets/icons";
import TertiaryMenu from "./TertiaryMenu";
import { SecondaryMenuItem } from "@types";
import BackButton from "./BackButton";

type Props = {
  items: SecondaryMenuItem[];
};

const SecondaryMenu: React.FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isTertiaryMenuOpen = useAppSelector(
    state => state.menuReducer.isTertiaryMenuOpen
  );
  const secondaryMenuItems = useAppSelector(
    state => state.menuReducer.secondaryMenuItems
  );

  const tertiaryMenuTitle = useAppSelector(
    state => state.menuReducer.tertiaryMenuTitle
  );

  const secondaryMenuTitle = useAppSelector(
    state => state.menuReducer.secondaryMenuTitle
  );

  const handleSecondaryMenuItemClick = (clickedItem: SecondaryMenuItem) => {
    const selectedItem = items.find(item => item.id === clickedItem.id);
    if (selectedItem) {
      dispatch(openTertiaryMenu(selectedItem.tertiaryMenu));
      dispatch(setTertiaryMenuTitle(clickedItem.title));
      dispatch(setSecondaryMenuItems(clickedItem));
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
        <TertiaryMenu items={secondaryMenuItems?.tertiaryMenu || []} />
      )}
    </>
  );
};

export default SecondaryMenu;
