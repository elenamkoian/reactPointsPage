import { useState } from 'react';
import { useSelector } from 'react-redux';
import { pointsSlice } from '../../store/slices/points.slice';
import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PointsList } from './points-list/points-list';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';

export const PointsPage = () => {
  const points = useSelector(pointsSlice.selectors.selectAll);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleIsFormVisible = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <Breadcrumbs
        isFormVisible={isFormVisible}
        onVisibilityChange={() => handleIsFormVisible()}
        active={0}
      />

      <div className="PageContent">
        <PointsList points={points} />

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

          {/*{*/}
          {/*  isFormVisible && (*/}
          {/*    <PointCreateForm*/}
          {/*      isFormVisible={isFormVisible}*/}
          {/*      onVisibilityChange={() => handleIsFormVisible()}*/}
          {/*    />*/}
          {/*  )*/}
          {/*}*/}
        </PageDetailsContainer>
      </div>
    </>
  );
};
