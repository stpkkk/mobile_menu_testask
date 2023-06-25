import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuData } from "@data";
import {
  MainMenu,
  MenuData,
  SecondaryMenuItems,
  TertiaryMenuItems,
} from "@types";

export interface MenuState {
  isMainMenuOpen: boolean;
  isSecondaryMenuOpen: boolean;
  isTertiaryMenuOpen: boolean;
  isDropdownMenuOpen: boolean;
  isMenuOpen: boolean;
  secondaryMenu: SecondaryMenuItems[];
  tertiaryMenuItems: TertiaryMenuItems[];
  menu: MainMenu[];
  secondaryMenuTitle: string;
  tertiaryMenuTitle: string;
  secondaryMenuItems?: SecondaryMenuItems | null;
  mainMenuItems?: MainMenu | null;
  menuData?: MenuData;
}

const initialState: MenuState = {
  isMainMenuOpen: false,
  isSecondaryMenuOpen: false,
  isTertiaryMenuOpen: false,
  isDropdownMenuOpen: false,
  isMenuOpen: false,
  secondaryMenu: [],
  tertiaryMenuItems: [],
  secondaryMenuTitle: "",
  tertiaryMenuTitle: "",
  secondaryMenuItems: null,
  mainMenuItems: null,
  ...menuData,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    //Menu Open Close
    resetMenu: () => initialState,
    toggleMenu: state => {
      state.isMenuOpen = !state.isMenuOpen;
      state.isMainMenuOpen = true;
    },
    openSecondaryMenu: (state, action: PayloadAction<SecondaryMenuItems[]>) => {
      state.secondaryMenu = action.payload;
      state.isSecondaryMenuOpen = true;
      state.isMainMenuOpen = false;
    },
    closeSecondaryMenu: state => {
      state.secondaryMenu = [];
      state.isSecondaryMenuOpen = false;
    },
    openTertiaryMenu: (state, action: PayloadAction<TertiaryMenuItems[]>) => {
      state.tertiaryMenuItems = action.payload;
      state.isTertiaryMenuOpen = true;
    },
    closeTertiaryMenu: state => {
      state.tertiaryMenuItems = [];
      state.isTertiaryMenuOpen = false;
    },
    toggleDropdown: state => {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    },
    //Set Menu Items
    selectedSecondaryMenu: (
      state,
      action: PayloadAction<SecondaryMenuItems>
    ) => {
      state.secondaryMenuItems = action.payload;
    },
    selectedMainMenu: (state, action: PayloadAction<MainMenu>) => {
      state.mainMenuItems = action.payload;
    },
    //Back Button
    backFromSubMenu: state => {
      if (state.isTertiaryMenuOpen) {
        state.isTertiaryMenuOpen = false;
        state.isSecondaryMenuOpen = true;
      } else if (state.isSecondaryMenuOpen) {
        state.isSecondaryMenuOpen = false;
        state.isMainMenuOpen = true;
      }
    },
    setSecondaryMenuTitle: (state, action: PayloadAction<string>) => {
      state.secondaryMenuTitle = action.payload;
    },
    setTertiaryMenuTitle: (state, action: PayloadAction<string>) => {
      state.tertiaryMenuTitle = action.payload;
    },
  },
});

export const {
  toggleMenu,
  openSecondaryMenu,
  toggleDropdown,
  closeSecondaryMenu,
  closeTertiaryMenu,
  backFromSubMenu,
  resetMenu,
  openTertiaryMenu,
  setSecondaryMenuTitle,
  setTertiaryMenuTitle,
  selectedSecondaryMenu,
  selectedMainMenu,
} = menuSlice.actions;

export default menuSlice.reducer;
