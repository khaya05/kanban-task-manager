import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './boards-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, boards: boardsSlice.reducer },
});

export default store;
