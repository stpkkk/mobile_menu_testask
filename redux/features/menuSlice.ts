import { createSlice } from "@reduxjs/toolkit";
import { menuData } from "@data";

type MenuState = {
  isMainMenuOpen: boolean;
  menuData: any;
};

const initialState = {
  isMainMenuOpen: false,
  ...menuData,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMainMenu: state => {
      state.isMainMenuOpen = !state.isMainMenuOpen;
    },
  },
});

export const { toggleMainMenu } = menuSlice.actions;
export default menuSlice.reducer;
