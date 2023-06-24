import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton";
import { closeSecondaryMenu } from "@redux/features/menuSlice";
import { TertiaryMenuItem } from "@types";

type Props = {
  items: TertiaryMenuItem[];
  parentTitle: string;
};

const TertiaryMenu: React.FC<Props> = ({ items, parentTitle }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  // const isTertiaryMenuOpen = useAppSelector(
  //   state => state.menuReducer.isTertiaryMenuOpen
  // );

  // useEffect(() => {
  //   if (!isTertiaryMenuOpen) {
  //     dispatch(closeSecondaryMenu());
  //   }
  // }, [isTertiaryMenuOpen, dispatch]);

  return (
    <>
      <BackButton name={parentTitle} />
      <div className="border-b-[1px] border-grayLine opacity-70" />
      <ul
        className={`${
          items.length > 8 && "overflow-y-scroll h-[calc(100vh-10rem)]"
        }`}
      >
        {items.map((item: TertiaryMenuItem) => (
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
