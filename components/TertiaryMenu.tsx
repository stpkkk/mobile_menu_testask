import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton";
import { TertiaryMenuItem } from "@types";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { backFromSubMenu } from "@redux/features/menuSlice";

type Props = {
  items: TertiaryMenuItem[];
};

const TertiaryMenu: React.FC<Props> = ({ items }) => {
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

  const backButtonTitleTertiary = useAppSelector(
    state => state.menuReducer.backButtonTitleTertiary
  );

  const handleBackClick = () => {
    dispatch(backFromSubMenu());
  };

  return (
    <>
      <BackButton
        handleClick={handleBackClick}
        name={backButtonTitleTertiary}
      />
      <div className="flex flex-col" ref={menuRef}>
        <ul className="h-[calc(100vh-10.5rem)]">
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
      </div>
    </>
  );
};

export default TertiaryMenu;
