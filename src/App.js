import './App.scss';
import { Component } from 'react';
import { PageShell } from './componetnts/page-shell';
import { Route, Routes } from 'react-router-dom';
import { PointsPage } from './pages/points/points.page';
import { PointCreateForm } from './pages/points/point-create-form/point-create-form';
import { CirclesPage } from './pages/circles/circles.page';
import { CircleCreateForm } from './pages/circles/circle-create-form/circle-create-form';
import { TrianglesPage } from './pages/triangles/triangles.page';
import { TriangleCreateForm } from './pages/triangles/triangle-create-form/triangle-create-form';

export class App extends Component {
  render() {
    return (
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
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
