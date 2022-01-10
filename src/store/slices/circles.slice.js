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
    increment: (state) => {
    },
    decrement: (state) => {
    },
    incrementByAmount: (state) => {
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
