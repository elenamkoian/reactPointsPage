// import { createSlice } from '@reduxjs/toolkit';
//
// const getInitialState = () => {
//   return {
//     allPoints: JSON.parse(localStorage.getItem('points')) ?? [],
//   };
// };
//
// const slice = createSlice({
//   name: 'points',
//   initialState: getInitialState(),
//   reducers: {
//     deletePoint: (state, { payload: id }) => {
//       state.allPoints = state.allPoints.filter((point) => point.id !== id);
//     },
//   },
// });
//
// const selectors = {
//   selectById: (state, id) => state.points.allPoints.find((point) => point.id === id),
// };
//
// export const pointsSlice = {
//   ...slice,
//   selectors,
// };
