import React from "react";
import { backFromSubMenu } from "@redux/features/menuSlice";
import { useAppDispatch } from "@redux/hooks";
import { ArrowLeftIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
};

const BackButton: React.FC<Props> = ({ name }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
  };

  return (
    <button
      className="flex items-center gap-3 cursor-pointer p-5 bg-transparent border-none outline-none"
      onClick={handleBackClick}
    >
      <ArrowLeftIcon />
      <p className="text-[22px] leading-[32px]">{t(name)}</p>
    </button>
  );
};

export default BackButton;
