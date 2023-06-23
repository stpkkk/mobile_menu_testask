import { cookies } from "next/dist/client/components/headers";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const languages = [
    {
      code: "en",
      name: "United States",
    },
    {
      code: "nl",
      name: "Netherlands",
    },
    {
      code: "by",
      name: "Беларусь",
    },
    {
      code: "ru",
      name: "Россия",
    },
    {
      code: "kz",
      name: "Казахстан",
    },
    {
      code: "tr",
      name: "Türkiye",
    },
  ];

  return (
    <div>
      <select
        value={i18n.language}
        onChange={e => handleChangeLanguage(e.target.value)}
      >
        {languages.map(({ code, name }) => (
          <option className="w-[180px]" value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
