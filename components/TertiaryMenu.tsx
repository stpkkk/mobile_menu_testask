"use client";

import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton";
import { TertiaryMenuItems } from "@types";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { backFromSubMenu } from "@redux/features/menuSlice";

const TertiaryMenu: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuDiv = menuRef.current;
    if (menuDiv && menuDiv.scrollHeight > window.innerHeight) {
      menuDiv.classList.add("overflow-y-scroll");
      menuDiv.classList.add("border-t-[1px]");
      menuDiv.classList.add("border-grayLine");
      menuDiv.classList.add("opacity-70");
    }
  }, []);

  const tertiaryMenuTitle = useAppSelector(
    state => state.menuReducer.tertiaryMenuTitle
  );

  const secondaryMenuItems = useAppSelector(
    state => state.menuReducer.secondaryMenuItems
  );

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
  };

  return (
    <>
      <BackButton handleClick={handleBackClick} name={tertiaryMenuTitle} />
      <div className="flex flex-col" ref={menuRef}>
        <ul className="h-[calc(100vh-10.5rem)]">
          {secondaryMenuItems?.tertiaryMenu.map((item: TertiaryMenuItems) => (
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
      </div>
    </>
  );
};

export default TertiaryMenu;
