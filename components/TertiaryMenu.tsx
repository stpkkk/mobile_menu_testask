import React from "react";
import { useAppSelector } from "@redux/hooks";
import { useTranslation } from "react-i18next";

const TertiaryMenu: React.FC = () => {
  const tertiaryMenuItems = useAppSelector(
    state => state.menuReducer.tertiaryMenuItems
  );

  const { t } = useTranslation();

  return (
    <>
      <div className="border-b-[1px] border-grayLine opacity-70" />
      <ul
        className={`${
          tertiaryMenuItems.length > 8 &&
          "overflow-y-scroll h-[calc(100vh-10rem)]"
        }`}
      >
        {tertiaryMenuItems.map(item => (
          <li
            className="cursor-pointer py-3 pl-5 pr-10 hover:bg-blue-300"
            key={item.id}
          >
            <>
              <div className="font-medium text-[16px] leading-6">
                {t(item.title)}
              </div>
              <div className="text-[12px] leading-5 text-gray">
                {t(item.content)}
              </div>
            </>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TertiaryMenu;
