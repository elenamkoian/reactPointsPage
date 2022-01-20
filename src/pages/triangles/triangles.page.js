import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { TrianglesList } from './triangles-list/triangles-list';
import { useSelector } from 'react-redux';
import { trianglesSlice } from '../../store/slices/triangles.slice';

export const TrianglesPage = () => {
  const triangles = useSelector(trianglesSlice.selectors.selectAll);

  return (
    <>
      <Breadcrumbs active={2} />

      <div className="PageContent">
        <TrianglesList triangles={triangles} />

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

        </PageDetailsContainer>
      </div>
    </>
  );
};
