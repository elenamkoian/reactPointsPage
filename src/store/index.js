import { configureStore } from '@reduxjs/toolkit';
import { pointsService } from './services/points.service';
import { circlesService } from './services/circles.service';
import { trianglesService } from './services/triangles.service';
import { rectanglesService } from './services/rectangles.service';

export const store = configureStore({
  reducer: {
    [pointsService.reducerPath]: pointsService.reducer,
    [circlesService.reducerPath]: circlesService.reducer,
    [trianglesService.reducerPath]: trianglesService.reducer,
    [rectanglesService.reducerPath]: rectanglesService.reducer,
    // points: pointsSlice.reducer,
    // circles: circlesSlice.reducer,
    // triangles: trianglesSlice.reducer,
    // rectangles: rectanglesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    pointsService.middleware,
    circlesService.middleware,
    trianglesService.middleware,
    rectanglesService.middleware,
  ],

});

// store.subscribe(() => {
//   const state = store.getState();
//   // localStorage.setItem('points', JSON.stringify(state.points.allPoints));
//   // localStorage.setItem('circles', JSON.stringify(state.circles.allCircles));
//   // localStorage.setItem('triangles', JSON.stringify(state.triangles.allTriangles));
//   // localStorage.setItem('rectangles', JSON.stringify(state.rectangles.allRectangles));
// });
