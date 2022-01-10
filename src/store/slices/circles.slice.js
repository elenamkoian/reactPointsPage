import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  return {
    allCircles: JSON.parse(localStorage.getItem('circles')) ?? [],
  };
};

const slice = createSlice({
  name: 'circles',
  initialState: getInitialState(),
  reducers: {
    deleteCircle: (state, { payload: id }) => {
      state.allCircles = state.allCircles.filter((circle) => circle.id !== id )
    },
    createCircle: (state, { payload }) => {
    },
  },
});

const selectors = {
  selectAll: (state) => state.circles.allCircles
}

export const circlesSlice = {
  ...slice,
  selectors,
};
