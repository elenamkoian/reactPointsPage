import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { RectanglesList } from './rectangles-list/rectangles-list';
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

export const RectanglesPage = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <>
        <Breadcrumbs active={3} />

        <div className="PageContent">
          <RectanglesList />

          <PageDetailsContainer>
            <FiguresCanvas />

            <Outlet />

          </PageDetailsContainer>
        </div>
      </>
    </PatchStyles>
  );
};
