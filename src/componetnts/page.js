import { useState } from 'react';
import { Navbar } from './navbar/navbar';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { PointsList } from '../pages/points/points-list/points-list';
import { FiguresCanvas } from './figures-canvas/figures-canvas.js';
import { PageDetailsContainer } from './page-details-container/page-details-container';
import { PointCreateForm } from '../pages/points/point-create-form/point-create-form';
import { genUId } from '../utils/gen-u-id';

export const Page = () => {
  const pages = ['Points', 'Circles', 'Rectangles', 'Triangles'];
  const [activePage, setActivePage] = useState(0);
  const [points, setPoints] = useState(() => {
    return JSON.parse(localStorage.getItem('points')) ?? [];
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleXIcon = (index) => {
    const newPoints = [...points];
    newPoints.splice(index, 1);
    localStorage.setItem('points', JSON.stringify(newPoints));
    setPoints(newPoints);
  };

  const handleSubmit = (point) => {
    const newPoint = { ...point, id: genUId() };
    const newPoints = [...points, newPoint];
    localStorage.setItem('points', JSON.stringify(newPoints));
    setPoints(newPoints);
  };

  const handleIsFormVisible = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handlePageChange = (index) => {
    setActivePage(index);
  };

  return (
    <div className="Page">
      <Navbar
        onActivePageChange={(index) => handlePageChange(index)}
        pages={pages}
        active={activePage}
      />

      <Breadcrumbs
        isFormVisible={isFormVisible}
        onVisibilityChange={() => handleIsFormVisible()}
        pages={pages}
        active={activePage}
      />

      <div className="PageContent">
        <PointsList points={points} onDeletePoint={(index) => handleXIcon(index)} />

        <PageDetailsContainer>
          <FiguresCanvas />
          {
            isFormVisible && (
              <PointCreateForm
                onSubmit={(point) => handleSubmit(point)}
                isFormVisible={isFormVisible}
                onVisibilityChange={() => handleIsFormVisible()}
              />
            )
          }
        </PageDetailsContainer>
      </div>

      {/*<>*/}
      {/*  /!*<CirclesList circles={this.state.circles}/>*!/*/}
      {/*</>*/}

    </div>
  );
};
