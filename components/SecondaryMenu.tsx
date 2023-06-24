import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { openTertiaryMenu } from "@redux/features/menuSlice";
import { ArrowRightIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";
import TertiaryMenu from "./TertiaryMenu";
import BackButton from "./BackButton";
import { SecondaryMenuItem } from "@types";

type Props = {
  items: SecondaryMenuItem[];
  parentTitle: string;
};

const SecondaryMenu: React.FC<Props> = ({ items, parentTitle }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  // const isSecondaryMenuOpen = useAppSelector(
  //   state => state.menuReducer.isSecondaryMenuOpen
  // );

  const tertiaryMenuItems = useAppSelector(
    state => state.menuReducer.secondaryMenuItems[0].tertiaryMenuItems
  );

  const isTertiaryMenuOpen = useAppSelector(
    state => state.menuReducer.isTertiaryMenuOpen
  );

  // useEffect(() => {
  //   if (!isSecondaryMenuOpen) {
  //     dispatch(closeTertiaryMenu());
  //   }
  // }, [isSecondaryMenuOpen, dispatch]);

  const handleSecondaryMenuItemClick = (clickedItem: SecondaryMenuItem) => {
    const selectedItem = items.find(
      (item: { id: number }) => item.id === clickedItem.id
    ) as SecondaryMenuItem;

    dispatch(openTertiaryMenu(selectedItem.tertiaryMenuItems));
  };

  return (
    <>
      {!isTertiaryMenuOpen ? (
        <>
          <BackButton name={parentTitle} />
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
        <TertiaryMenu items={tertiaryMenuItems} parentTitle={parentTitle} />
      )}
    </>
  );
};

export default SecondaryMenu;
