import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { TrianglesList } from './triangles-list/triangles-list';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
    PageContent: {
      display: 'flex',
      padding: [0, theme.spacing(3)],
      gap: theme.spacing(2),
    },
  }
));

export const TrianglesPage = () => {
  const classes = useStyles();
  // const triangles = useSelector(trianglesSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <>
        <Breadcrumbs active={2} />

        <div className="PageContent">
          <TrianglesList />

          <PageDetailsContainer>
            <FiguresCanvas />

            <Outlet />

          </PageDetailsContainer>
        </div>
      </>
    </PatchStyles>
  );
};
