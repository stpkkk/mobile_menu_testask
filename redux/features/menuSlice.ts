import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
  isMainMenuOpen: boolean;
};

const initialState = {
  isMainMenuOpen: false,
} as MenuState;

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
