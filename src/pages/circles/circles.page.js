import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { Outlet } from 'react-router-dom';
import { CirclesList } from './circles-list/circles-list';
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

export const CirclesPage = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>

      <>
        <Breadcrumbs active={1} />

        <div className="PageContent">
          <CirclesList />

          <PageDetailsContainer>
            <FiguresCanvas />

            <Outlet />

          </PageDetailsContainer>
        </div>

      </>
    </PatchStyles>
  );
};
