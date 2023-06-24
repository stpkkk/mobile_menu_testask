import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton";
import { TertiaryMenuItem } from "@types";

type Props = {
  items: TertiaryMenuItem[];
};

const TertiaryMenu: React.FC<Props> = ({ items }) => {
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuDiv = menuRef.current;
    if (menuDiv && menuDiv.scrollHeight > window.innerHeight) {
      menuDiv.classList.add("overflow-y-scroll");
      menuDiv.classList.add("border-t-[1px]");
      menuDiv.classList.add("border-grayLine");
      menuDiv.classList.add("opacity-70");
    } else {
      menuDiv?.classList.remove("overflow-y-scroll");
    }
  }, []);

  return (
    <>
      <BackButton />
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
