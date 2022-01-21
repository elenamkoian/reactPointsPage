import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { Outlet } from 'react-router-dom';
import { rectanglesSlice } from '../../store/slices/rectangles.slice';
import { RectanglesList } from './rectangles-list/rectangles-list';
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

export const RectanglesPage = () => {
  const classes = useStyles();
  const rectangles = useSelector(rectanglesSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <>
        <Breadcrumbs active={3} />

        <div className="PageContent">
          <RectanglesList rectangles={rectangles} />

          <PageDetailsContainer>
            <FiguresCanvas />

            <Outlet />

          </PageDetailsContainer>
        </div>
      </>
    </PatchStyles>
  );
};
