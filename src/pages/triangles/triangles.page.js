import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { TrianglesList } from './triangles-list/triangles-list';
import { useSelector } from 'react-redux';
import { trianglesSlice } from '../../store/slices/triangles.slice';

export const TrianglesPage = () => {
  const triangles = useSelector(trianglesSlice.selectors.selectAll);
  // const triangles = [
  //   {
  //     vertices: [
  //       {vertex: { x: 1, y: 2, name: 'A' }},
  //       {vertex: { x: 3, y: 4, name: 'B' }},
  //       {vertex: { x: 5, y: 6, name: 'C' }},
  //     ],
  //     name: 'ABC',
  //     id: genUid(),
  //   },
  // ];

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
