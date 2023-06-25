import React from "react";
import { ArrowLeftIcon } from "@public/assets/icons";
import { useTranslation } from "react-i18next";

type Props = { handleClick: () => void; name: string };

const BackButton: React.FC<Props> = ({ handleClick, name }) => {
  const { t } = useTranslation();

  return (
    <button
      className="flex items-center gap-3 cursor-pointer p-5 bg-transparent border-none outline-none"
      onClick={handleClick}
    >
      <ArrowLeftIcon />
      <p className="text-start text-[22px] leading-[32px]">{t(name)}</p>
    </button>
  );
};

export default BackButton;
