export interface MenuItem {
  id: number;
  title: string;
  parentId: number | null;
  secondaryMenuItems?: MenuItem[];
  tertiaryMenuItems?: MenuItem[];
  content?: string;
}

export interface MenuData {
  menuItems: MenuItem[];
}
