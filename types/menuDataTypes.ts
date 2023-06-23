export interface MenuItemTypes {
  id: number;
  title: string;
  parentId: number | null;
  secondaryMenuItems?: MenuItemTypes[];
  tertiaryMenuItems?: MenuItemTypes[];
  content?: string;
}

export interface MenuDataTypes {
  menuItems: MenuItemTypes[];
}
