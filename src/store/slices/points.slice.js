import { createSlice } from '@reduxjs/toolkit';
import genUid from 'light-uid';

const getInitialState = () => {
  return {
    allPoints: JSON.parse(localStorage.getItem('points')) ?? [],
  };
};

const slice = createSlice({
  name: 'points',
  initialState: getInitialState(),
  reducers: {
    deletePoint: (state, { payload: id }) => {
      state.allPoints = state.allPoints.filter((point) => point.id !== id);
    },
    createPoint: (state, { payload }) => {
      state.allPoints.push({ id: genUid(), ...payload });
    },
  },
});

const selectors = {
  selectAll: (state) => state.points.allPoints,
  selectById: (state, id) => state.points.allPoints.find((point) => point.id === id),
};

export const pointsSlice = {
  ...slice,
  selectors,
};
