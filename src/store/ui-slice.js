import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isSidebarVisible: true,
    isOverlayVisible: false,
    isTaskDetailsVisible: false,
  },

  reducers: {
    showSidebar(state) {
      state.isSidebarVisible = true;
    },

    hideSidebar(state) {
      state.isSidebarVisible = false;
    },

    toggleOverlay(state) {
      state.isOverlayVisible = !state.isOverlayVisible;
    },

    toggleTaskDetails(state) {
      state.isTaskDetailsVisible = !state.isTaskDetailsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
