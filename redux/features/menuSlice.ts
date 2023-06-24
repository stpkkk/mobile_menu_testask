import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { menuData } from "@data";
import {
  MenuData,
  MenuItem,
  SecondaryMenuItem,
  TertiaryMenuItem,
} from "@types";

type MenuState = {
  isMainMenuOpen: boolean;
  isSecondaryMenuOpen: boolean;
  isTertiaryMenuOpen: boolean;
  isDropdownMenuOpen: boolean;
  isMenuOpen: boolean;
  menuData?: MenuData;
  secondaryMenuItems: SecondaryMenuItem[];
  tertiaryMenuItems: TertiaryMenuItem[];
  menuItems: MenuItem[];
};

const initialState: MenuState = {
  isMainMenuOpen: false,
  isSecondaryMenuOpen: false,
  isTertiaryMenuOpen: false,
  isDropdownMenuOpen: false,
  secondaryMenuItems: [],
  tertiaryMenuItems: [],
  isMenuOpen: false,
  ...menuData,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    resetMenu: () => initialState,
    toggleMainMenu: state => {
      state.isMenuOpen = !state.isMenuOpen;
      state.isMainMenuOpen = true;
    },
    backFromSubMenu: state => {
      (state.isMainMenuOpen = true), (state.isSecondaryMenuOpen = false);
    },
    toggleDropdown: state => {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    },
    openSecondaryMenu: (state, action: PayloadAction<SecondaryMenuItem[]>) => {
      state.secondaryMenuItems = action.payload;
      state.isSecondaryMenuOpen = true;
      state.isMainMenuOpen = false;
    },
    closeSecondaryMenu: state => {
      state.secondaryMenuItems = [];
      state.isSecondaryMenuOpen = false;
    },
    openTertiaryMenu: (state, action: PayloadAction<TertiaryMenuItem[]>) => {
      state.tertiaryMenuItems = action.payload;
      state.isTertiaryMenuOpen = true;
      // state.isSecondaryMenuOpen = false;
      // state.secondaryMenuItems = [];
    },
    closeTertiaryMenu: state => {
      state.tertiaryMenuItems = [];
      state.isTertiaryMenuOpen = false;
    },
  },
});

export const {
  toggleMainMenu,
  openSecondaryMenu,
  toggleDropdown,
  closeSecondaryMenu,
  closeTertiaryMenu,
  backFromSubMenu,
  resetMenu,
  openTertiaryMenu,
} = menuSlice.actions;
export default menuSlice.reducer;
