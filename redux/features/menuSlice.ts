import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuData } from "@data";
import { MenuData, Menu, SecondaryMenuItem, TertiaryMenuItem } from "@types";

interface MenuState {
  isMainMenuOpen: boolean;
  isSecondaryMenuOpen: boolean;
  isTertiaryMenuOpen: boolean;
  isDropdownMenuOpen: boolean;
  isMenuOpen: boolean;
  secondaryMenu: SecondaryMenuItem[];
  tertiaryMenu: TertiaryMenuItem[];
  menu: Menu[];
  backButtonTitle: string;
  backButtonTitleTertiary: string;
  selectedSecondaryMenuItem?: SecondaryMenuItem | null;
  selectedMainMenuItem?: Menu | null;
  menuData?: MenuData;
}

const initialState: MenuState = {
  isMainMenuOpen: false,
  isSecondaryMenuOpen: false,
  isTertiaryMenuOpen: false,
  isDropdownMenuOpen: false,
  isMenuOpen: false,
  secondaryMenu: [],
  tertiaryMenu: [],
  backButtonTitle: "",
  backButtonTitleTertiary: "",
  selectedSecondaryMenuItem: null,
  selectedMainMenuItem: null,
  ...menuData,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    resetMenu: () => initialState,
    toggleMainMenu: state => {
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
    backFromSubMenu: state => {
      if (state.isTertiaryMenuOpen) {
        state.isTertiaryMenuOpen = false;
        state.isSecondaryMenuOpen = true;
      } else if (state.isSecondaryMenuOpen) {
        state.isSecondaryMenuOpen = false;
        state.isMainMenuOpen = true;
      }
    },
    setBackButtonTitle: (state, action: PayloadAction<string>) => {
      state.backButtonTitle = action.payload;
    },
    setBackButtonTitleTertiary: (state, action: PayloadAction<string>) => {
      state.backButtonTitleTertiary = action.payload;
    },
    setSelectedSecondaryMenuItem: (
      state,
      action: PayloadAction<SecondaryMenuItem>
    ) => {
      state.selectedSecondaryMenuItem = action.payload;
    },
    setSelectedMainMenuItem: (state, action: PayloadAction<Menu>) => {
      state.selectedMainMenuItem = action.payload;
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
  setBackButtonTitle,
  setBackButtonTitleTertiary,
  setSelectedSecondaryMenuItem,
  setSelectedMainMenuItem,
} = menuSlice.actions;

export default menuSlice.reducer;
