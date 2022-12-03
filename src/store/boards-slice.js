import { createSlice } from '@reduxjs/toolkit';
import { boards } from '../content/data';

const boardsSlice = createSlice({
  name: 'boardsSlice',
  initialState: {
    boards,
    currentBoard: boards[1],
    currentTask: {},
  },
  reducers: {
    getCurrentBoard(state, action) {
      state.currentBoard = state.boards.find(
        (board) => board.id === action.payload
      );
    },

    getCurrentTask(state, action) {
      const {
        id: { id },
        status,
      } = action.payload;

      const column = state.currentBoard.columns.find(
        (column) => column.name === status
      );

      state.currentTask = column.tasks.find((task) => task.id === id);
    },

    toggleSubtaskStatus(state, payload) {},
  },
});

export const boardActions = boardsSlice.actions;

export default boardsSlice;
