import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import genUid from 'light-uid';

export const TrianglesPage = () => {
  const triangles = [
    {
      vertices: {
        vertex1: { x: 1, y: 2, name: 'A'},
        vertex2: { x: 1, y: 2, name: 'B'},
        vertex3: { x: 1, y: 2, name: 'C'},
      },
      name: 'ABC',
      id: genUid()
    },
  ]

  return (
    <>
      <Breadcrumbs active={2} />

      <div className="PageContent">
        {/*<PointsList points={points} />*/}

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

        </PageDetailsContainer>
      </div>
    </>
  );
};
