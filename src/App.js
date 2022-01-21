import { PageShell } from './componetnts/page-shell';
import { Route, Routes } from 'react-router-dom';
import { PointsPage } from './pages/points/points.page';
import { PointCreateForm } from './pages/points/point-create-form/point-create-form';
import { CirclesPage } from './pages/circles/circles.page';
import { CircleCreateForm } from './pages/circles/circle-create-form/circle-create-form';
import { TrianglesPage } from './pages/triangles/triangles.page';
import { TriangleCreateForm } from './pages/triangles/triangle-create-form/triangle-create-form';
import { RectanglesPage } from './pages/rectangles/rectangles.page';
import { RectangleCreateForm } from './pages/rectangles/rectangle-create-form/rectangle-create-form';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
    AppRoot: {
      height: '100%',
      backgroundColor: theme.palette.background.default,
    }
  }
));

export function App() {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="AppRoot">
        <Routes>
          <Route path="/" element={<PageShell />}>
            <Route path="points" element={<PointsPage />}>
              <Route path="create" element={<PointCreateForm />} />
            </Route>
            <Route path="circles" element={<CirclesPage />}>
              <Route path="create" element={<CircleCreateForm />} />
            </Route>
            <Route path="triangles" element={<TrianglesPage />}>
              <Route path="create" element={<TriangleCreateForm />} />
            </Route>
            <Route path="rectangles" element={<RectanglesPage />}>
              <Route path="create" element={<RectangleCreateForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </PatchStyles>
  );
}

export default App;
