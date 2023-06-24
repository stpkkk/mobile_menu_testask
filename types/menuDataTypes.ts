export interface TertiaryMenuItem {
  id: number;
  title: string;
  content: string;
  parentId: number;
}

export interface SecondaryMenuItem {
  id: number;
  title: string;
  parentId: number | null;
  tertiaryMenuItems: TertiaryMenuItem[];
}

export interface MenuItem {
  id: number;
  title: string;
  parentId: number | null;
  secondaryMenuItems: SecondaryMenuItem[];
}

export interface MenuData {
  menuItems: MenuItem[];
}
