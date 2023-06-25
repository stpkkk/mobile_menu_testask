export interface TertiaryMenuItems {
  id: number;
  title: string;
  content: string;
}

export interface SecondaryMenuItems {
  id: number;
  title: string;
  tertiaryMenu: TertiaryMenuItems[];
}

export interface MainMenu {
  id: number;
  title: string;
  secondaryMenu: SecondaryMenuItems[];
}

export interface MenuData {
  menu: MainMenu[];
}
