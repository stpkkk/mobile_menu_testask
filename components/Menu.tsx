import React from "react";
import { useAppSelector } from "@redux/hooks";
import MainMenu from "./MainMenu";
import Header from "./Header";

const Menu: React.FC = () => {
  const mainMenuItems = useAppSelector(state => state.menuReducer.menuItems);

  return (
    <div className="max-w-[360px] w-full">
      <Header />
      <MainMenu items={mainMenuItems} />
    </div>
  );
};

export default Menu;
