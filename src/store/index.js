import { configureStore } from '@reduxjs/toolkit';
import { pointsSlice } from './slices/points.slice';

export const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('points', JSON.stringify(state.points.allPoints));
});
