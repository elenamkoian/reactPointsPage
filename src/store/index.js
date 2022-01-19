import { configureStore } from '@reduxjs/toolkit';
import { pointsSlice } from './slices/points.slice';
import { circlesSlice } from './slices/circles.slice';
import { trianglesSlice } from './slices/triangles.slice';
import { rectanglesSlice } from './slices/rectangles.slice';

export const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
    circles: circlesSlice.reducer,
    triangles: trianglesSlice.reducer,
    rectangles: rectanglesSlice.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('points', JSON.stringify(state.points.allPoints));
  localStorage.setItem('circles', JSON.stringify(state.circles.allCircles));
  localStorage.setItem('triangles', JSON.stringify(state.triangles.allTriangles));
  localStorage.setItem('rectangles', JSON.stringify(state.rectangles.allRectangles));
});
