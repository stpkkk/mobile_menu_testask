import React, { useEffect } from "react";
import Header from "./Header";
import { ArrowRightIcon } from "@public/icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

const MainMenu: React.FC = () => {
  let mainMenu = useAppSelector(state => state.menuReducer.menuItems);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const handleClick = () => {};

  return (
    <div className="max-w-[360px] w-full p-5">
      <Header />
      <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
        <ul className="max-w-[300px]">
          {mainMenu.map(item => {
            return (
              <li
                className="font-medium py-3 text-[22px] leading-8 cursor-pointer"
                key={item.id}
                onClick={handleClick}
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
