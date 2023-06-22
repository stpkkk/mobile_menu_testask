import React, { Dispatch, SetStateAction } from "react";
import Header from "./Header";
import { menuData } from "@data";
import { ArrowRightIcon } from "@public/icons";

type Props = {
  setOpenedMenu: Dispatch<SetStateAction<boolean>>;
};

const MainMenu: React.FC<Props> = ({ setOpenedMenu }) => {
  return (
    <div className="max-w-[360px] w-full p-5">
      <Header setOpenedMenu={setOpenedMenu} />
      <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
        <ul className="max-w-[300px]">
          {menuData.menuItems.map(item => {
            return (
              <li
                className="font-medium py-3 text-[22px] leading-8 cursor-pointer"
                key={item.id}
              >
                <div className="flex_between">
                  <div>{item.title}</div>
                  <ArrowRightIcon />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="font-medium text-[22px] leading-8">
          <div className="py-3">Контакты</div>
          <div className="py-3">Поиск</div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
