import { MenuDataTypes } from "@types";

export const findMenuItemById = (id: number, menuData: MenuDataTypes): any => {
  const searchMenuItems = (menuItems: any[]): any => {
    for (const item of menuItems) {
      if (item.id === id) {
        return item;
      }
      if (item.secondaryMenuItems) {
        const foundItem = searchMenuItems(item.secondaryMenuItems);
        if (foundItem) {
          return foundItem;
        }
      }
    }
    return null;
  };

  return searchMenuItems(menuData.menuItems);
};
