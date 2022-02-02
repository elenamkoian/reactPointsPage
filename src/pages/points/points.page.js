import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PointsList } from './points-list/points-list';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
    PageContent: {
      display: 'flex',
      padding: [0, theme.spacing(3)],
      gap: theme.spacing(4),
    },
  }
));

export const PointsPage = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <>
        <Breadcrumbs active={0} />

        <div className="PageContent">
          <PointsList />

          <PageDetailsContainer>
            <FiguresCanvas />

            <Outlet />

          </PageDetailsContainer>
        </div>
      </>
    </PatchStyles>
  );
};
