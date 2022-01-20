import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { rectanglesSlice } from '../../store/slices/rectangles.slice';
import { RectanglesList } from './rectangles-list/rectangles-list';

export const RectanglesPage = () => {
  const rectangles = useSelector(rectanglesSlice.selectors.selectAll);
  // const rectangles = [
  //   {
  //     vertices: [
  //       { x: 1, y: 2, name: 'A' },
  //       { x: 3, y: 4, name: 'B' },
  //       { x: 5, y: 6, name: 'C' },
  //       { x: 7, y: 8, name: 'D' },
  //     ],
  //     name: 'ABC',
  //     id: genUid(),
  //   },
  // ];

  return (
    <>
      <Breadcrumbs active={3} />

      <div className="PageContent">
        <RectanglesList rectangles={rectangles} />

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

        </PageDetailsContainer>
      </div>
    </>
  );
};
