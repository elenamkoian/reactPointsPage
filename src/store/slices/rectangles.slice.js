import { createSlice } from '@reduxjs/toolkit';
import genUid from 'light-uid';

const getInitialState = () => {
  return {
    allRectangles: JSON.parse(localStorage.getItem('points')) ?? [],
  };
};

const slice = createSlice({
  name: 'rectangles',
  initialState: getInitialState(),
  reducers: {
    deleteRectangle: (state, { payload: id }) => {
      state.allRectangles = state.allRectangles.filter((rectangle) => rectangle.id !== id);
    },
    createRectangle: (state, { payload }) => {
      state.allRectangles.push({ id: genUid(), ...payload });
    },
  },
});

const selectors = {
  selectAll: (state) => state.rectangles.allRectangles,
  selectById: (state, id) => state.rectangles.allRectangles.find((rectangle) => rectangle.id === id),
};

export const rectanglesSlice = {
  ...slice,
  selectors,
};
