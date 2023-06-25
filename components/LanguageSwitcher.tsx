import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ArrowDownIcon, CheckIcon } from "@public/assets/icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toggleDropdown } from "@redux/features/menuSlice";
import { languages } from "@data/languageSwitcher";

const LanguageSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const { i18n, t } = useTranslation();
  const isOpen = useAppSelector(state => state.menuReducer.isDropdownMenuOpen);
  const languageCode = languages.find(
    lang => lang.code === i18n.language
  )?.code;

  const handleChangeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
    dispatch(toggleDropdown());
  };

  const handleDropdownClick = () => {
    dispatch(toggleDropdown());
  };

  return (
    <div className="text-[14px] leading-[24px]">
      <div
        className="flex_center gap-2 cursor-pointer"
        onClick={handleDropdownClick}
      >
        <Image
          src={languages.find(lang => lang.code === i18n.language)?.flag || ""}
          alt="flag"
          width={18}
          height={18}
        />
        <div className="text-[22px] leading-[32px] text-medium">
          {languageCode &&
            languageCode.charAt(0).toUpperCase() + languageCode.slice(1)}
        </div>
        <ArrowDownIcon color={isOpen ? "#1D7DED" : "#849BAF"} />
      </div>
      {isOpen && (
        <div className="absolute z-30 w-[180px] bg-white shadow-lg pt-3">
          <div className="px-5 py-2 font-bold">{t("Country")}</div>
          <ul>
            {languages.map(({ code, name, flag }) => (
              <li
                className="px-5 py-2 hover:bg-blue-300 cursor-pointer"
                value={code}
                key={code}
                onClick={() => handleChangeLanguage(code)}
              >
                <div className="flex_between gap-2">
                  <Image src={flag} alt={name} width={16} height={16} />
                  <div className="mr-auto">{name}</div>
                  {i18n.language === code && <CheckIcon />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
