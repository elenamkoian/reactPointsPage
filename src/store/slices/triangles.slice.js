import { createSlice } from '@reduxjs/toolkit';
import genUid from 'light-uid';

const getInitialState = () => {
  return {
    allTriangles: JSON.parse(localStorage.getItem('triangles')) ?? [],
  };
};

const slice = createSlice({
  name: 'triangles',
  initialState: getInitialState(),
  reducers: {
    deleteTriangle: (state, { payload: id }) => {
      state.allTriangles = state.allTriangles.filter((triangle) => triangle.id !== id);
    },
    createTriangle: (state, { payload }) => {
      state.allTriangles.push({ id: genUid(), ...payload });
    },
  },
});

const selectors = {
  selectAll: (state) => state.triangles.allTriangles,
  selectById: (state, id) => state.triangles.allTriangles.find((triangle) => triangle.id === id),
};

export const trianglesSlice = {
  ...slice,
  selectors,
};
