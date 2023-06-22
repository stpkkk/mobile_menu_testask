import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { ArrowRightIcon } from "@public/icons";
import { toggleSecondaryMenu } from "@redux/features/menuSlice";

const MainMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const mainMenu = useAppSelector(state => state.menuReducer.menuItems);

  const handleMainMenuItemClick = (itemId: number) => {
    const selectedItem = mainMenu.find(item => item.id === itemId);
    if (
      selectedItem &&
      selectedItem.secondaryMenuItems &&
      selectedItem.secondaryMenuItems.length > 0
    ) {
      dispatch(toggleSecondaryMenu(selectedItem.secondaryMenuItems));
    }
  };
  return (
    <ul>
      {mainMenu.map(item => (
        <li
          key={item.id}
          className="font-medium py-3 text-[22px] leading-8 cursor-pointer"
          onClick={() => handleMainMenuItemClick(item.id)}
        >
          <div className="flex_between">
            <div>{item.title}</div>
            <ArrowRightIcon />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
