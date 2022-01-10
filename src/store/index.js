import { configureStore } from '@reduxjs/toolkit';
import { pointsSlice } from './slices/points.slice';
import { circlesSlice } from './slices/circles.slice';

export const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
    circles: circlesSlice.reducer,
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('points', JSON.stringify(state.points.allPoints))
});
