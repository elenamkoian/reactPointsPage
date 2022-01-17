import { useSelector } from 'react-redux';
import { pointsSlice } from '../../store/slices/points.slice';
import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PointsList } from './points-list/points-list';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';

export const PointsPage = () => {
  const points = useSelector(pointsSlice.selectors.selectAll);
  return (
    <>
      <Breadcrumbs active={0} />

      <div className="PageContent">
        <PointsList points={points} />

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

        </PageDetailsContainer>
      </div>
    </>
  );
};

{/*{*/}
{/*  isFormVisible && (*/}
{/*    <PointCreateForm*/}
{/*      isFormVisible={isFormVisible}*/}
{/*      onVisibilityChange={() => handleIsFormVisible()}*/}
{/*    />*/}
{/*  )*/}
{/*}*/}
