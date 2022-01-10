import './App.scss';
import { Component } from 'react';
import { PageShell } from './componetnts/page-shell';
import { Route, Routes } from 'react-router-dom';
import { PointsPage } from './pages/points/points.page';
import { PointCreateForm } from './pages/points/point-create-form/point-create-form';

export class App extends Component {
  render() {
    return (
      <div className="AppRoot">
        <Routes>
          <Route path="/" element={<PageShell />}>
            <Route path="points" element={<PointsPage />}>
              <Route path="create" element={<PointCreateForm />} />
            </Route>
          </Route>
        </Routes>
        {/*<Page />*/}
      </div>
    );
  }
}

export default App;
