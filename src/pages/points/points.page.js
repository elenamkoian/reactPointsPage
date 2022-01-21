import { useSelector } from 'react-redux';
import { pointsSlice } from '../../store/slices/points.slice';
import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PointsList } from './points-list/points-list';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles(() => ({
    PageContent: {
      display: 'flex',
      padding: '0 24px',
      gap: '16px',
    },
  }
));

export const PointsPage = () => {
  const classes = useStyles();
  const points = useSelector(pointsSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
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
    </PatchStyles>
  );
};
