import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PointsList } from './points-list/points-list';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { rectanglesSlice } from '../../store/slices/rectangles.slice';

export const RectanglesPage = () => {
  const rectangles = useSelector(rectanglesSlice.selectors.selectAll);//

  return (
    <>
      <Breadcrumbs active={3} />

      <div className="PageContent">
        {/*<PointsList rectangles={rectangles} />*/}

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

        </PageDetailsContainer>
      </div>
    </>
  );
};
