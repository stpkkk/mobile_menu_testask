import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { menuData } from "@data";
import { MenuDataTypes, MenuItemTypes } from "@types";

type MenuState = {
  isMainMenuOpen: boolean;
  isSecondaryMenuOpen: boolean;
  isTertiaryMenuOpen: boolean;
  isDropdownMenuOpen: boolean;
  menuData?: MenuDataTypes;
  secondaryMenuItems: MenuItemTypes[];
  tertiaryMenuItems: MenuItemTypes[];
  menuItems: MenuItemTypes[];
};

const initialState: MenuState = {
  isMainMenuOpen: false,
  isSecondaryMenuOpen: false,
  isTertiaryMenuOpen: false,
  isDropdownMenuOpen: false,
  secondaryMenuItems: [],
  tertiaryMenuItems: [],
  ...menuData,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    resetMenu: () => initialState,
    toggleMainMenu: state => {
      state.isMainMenuOpen = !state.isMainMenuOpen;
    },
    toggleDropdown: state => {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    },
    toggleSecondaryMenu: (state, action: PayloadAction<MenuItemTypes[]>) => {
      state.secondaryMenuItems = action.payload;
      state.isSecondaryMenuOpen = true;
      state.tertiaryMenuItems = [];
      state.isTertiaryMenuOpen = false;
    },
    toggleTertiaryMenu: (state, action: PayloadAction<MenuItemTypes[]>) => {
      state.tertiaryMenuItems = action.payload;
      state.isTertiaryMenuOpen = true;
    },
    closeSecondaryMenu: state => {
      state.secondaryMenuItems = [];
      state.isSecondaryMenuOpen = false;
    },
    closeTertiaryMenu: state => {
      state.tertiaryMenuItems = [];
      state.isTertiaryMenuOpen = false;
    },
  },
});

export const {
  toggleMainMenu,
  toggleSecondaryMenu,
  toggleTertiaryMenu,
  toggleDropdown,
  closeSecondaryMenu,
  closeTertiaryMenu,
  resetMenu,
} = menuSlice.actions;
export default menuSlice.reducer;
