import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuData } from "@data";
import { Menu, SecondaryMenuItem, TertiaryMenuItem, MenuState } from "@types";

const initialState: MenuState = {
  isMainMenuOpen: false,
  isSecondaryMenuOpen: false,
  isTertiaryMenuOpen: false,
  isDropdownMenuOpen: false,
  isMenuOpen: false,
  secondaryMenu: [],
  tertiaryMenu: [],
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
    openSecondaryMenu: (state, action: PayloadAction<SecondaryMenuItem[]>) => {
      state.secondaryMenu = action.payload;
      state.isSecondaryMenuOpen = true;
      state.isMainMenuOpen = false;
    },
    closeSecondaryMenu: state => {
      state.secondaryMenu = [];
      state.isSecondaryMenuOpen = false;
    },
    openTertiaryMenu: (state, action: PayloadAction<TertiaryMenuItem[]>) => {
      state.tertiaryMenu = action.payload;
      state.isTertiaryMenuOpen = true;
    },
    closeTertiaryMenu: state => {
      state.tertiaryMenu = [];
      state.isTertiaryMenuOpen = false;
    },
    toggleDropdown: state => {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    },
    //Set Menu Items
    setSecondaryMenuItems: (
      state,
      action: PayloadAction<SecondaryMenuItem>
    ) => {
      state.secondaryMenuItems = action.payload;
    },
    setMainMenuItems: (state, action: PayloadAction<Menu>) => {
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
  setSecondaryMenuItems,
  setMainMenuItems,
} = menuSlice.actions;

export default menuSlice.reducer;
