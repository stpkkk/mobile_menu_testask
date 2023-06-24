import React from "react";
import { backFromSubMenu } from "@redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { ArrowLeftIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";

const BackButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
    // const selectedItem = items.find(
    //   (item: { id: number }) => item.id === clickedItem.id
    // ) as SecondaryMenuItem;
  };

  const buttonTitle = useAppSelector(
    state => state.menuReducer.backButtonTitle
  );

  return (
    <button
      className="flex items-center gap-3 cursor-pointer p-5 bg-transparent border-none outline-none"
      onClick={handleBackClick}
    >
      <ArrowLeftIcon />
      <p className="text-[22px] leading-[32px]">{t(buttonTitle)}</p>
    </button>
  );
};

export default BackButton;
