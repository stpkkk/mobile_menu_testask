import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { menuData } from "@data";
import { MenuData, MenuItem } from "@types";

type MenuState = {
  isMainMenuOpen: boolean;
  isSecondaryMenuOpen: boolean;
  isTertiaryMenuOpen: boolean;
  menuData?: MenuData;
  secondaryMenuItems: MenuItem[];
  tertiaryMenuItems: MenuItem[];
  menuItems: MenuItem[];
};

const initialState: MenuState = {
  isMainMenuOpen: false,
  isSecondaryMenuOpen: false,
  isTertiaryMenuOpen: false,
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
    toggleSecondaryMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.secondaryMenuItems = action.payload;
      state.isSecondaryMenuOpen = true;
      state.tertiaryMenuItems = [];
      state.isTertiaryMenuOpen = false;
    },
    toggleTertiaryMenu: (state, action: PayloadAction<MenuItem[]>) => {
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
  closeSecondaryMenu,
  closeTertiaryMenu,
  resetMenu,
} = menuSlice.actions;
export default menuSlice.reducer;
