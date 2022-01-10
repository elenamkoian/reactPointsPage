import { useState } from 'react';
import { Navbar } from './navbar/navbar';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { PointsList } from '../pages/points/points-list/points-list';
import { FiguresCanvas } from './figures-canvas/figures-canvas.js';
import { PageDetailsContainer } from './page-details-container/page-details-container';
import { PointCreateForm } from '../pages/points/point-create-form/point-create-form';
import { useSelector } from 'react-redux';
import { pointsSlice } from '../store/slices/points.slice';

export const Page = () => {
  const pages = ['Points', 'Circles', 'Rectangles', 'Triangles'];
  const [activePage, setActivePage] = useState(0);
  const points = useSelector(pointsSlice.selectors.selectAll);
  const [isFormVisible, setIsFormVisible] = useState(false);

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
        <PointsList points={points} />

        <PageDetailsContainer>
          <FiguresCanvas />

          {
            isFormVisible && (
              <PointCreateForm
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
