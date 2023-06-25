import {
  Menu,
  MenuData,
  SecondaryMenuItem,
  TertiaryMenuItem,
} from "./menuData";

export interface MenuState {
  isMainMenuOpen: boolean;
  isSecondaryMenuOpen: boolean;
  isTertiaryMenuOpen: boolean;
  isDropdownMenuOpen: boolean;
  isMenuOpen: boolean;
  secondaryMenu: SecondaryMenuItem[];
  tertiaryMenu: TertiaryMenuItem[];
  menu: Menu[];
  secondaryMenuTitle: string;
  tertiaryMenuTitle: string;
  secondaryMenuItems?: SecondaryMenuItem | null;
  mainMenuItems?: Menu | null;
  menuData?: MenuData;
}
