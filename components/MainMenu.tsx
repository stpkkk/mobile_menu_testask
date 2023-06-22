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
    <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
      <ul>
        {mainMenu.map(item => (
          <li
            key={item.id}
            className="font-medium text-[22px] leading-8 cursor-pointer py-3 px-5 mr-5 hover:bg-blue-300"
            onClick={() => handleMainMenuItemClick(item.id)}
          >
            <div className="flex_between">
              <div>{item.title}</div>
              <ArrowRightIcon />
            </div>
          </li>
        ))}
      </ul>
      <div className="font-medium text-[22px] leading-8 p-5">
        <div className="py-3 cursor-pointer">Contacts</div>
        <div className="py-3 cursor-pointer">Search</div>
      </div>
    </div>
  );
};

export default MainMenu;
