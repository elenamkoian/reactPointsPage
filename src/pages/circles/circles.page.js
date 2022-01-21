import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { Outlet } from 'react-router-dom';
import { CirclesList } from './circles-list/circles-list';
import { useSelector } from 'react-redux';
import { circlesSlice } from '../../store/slices/circles.slice';
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

export const CirclesPage = () => {
  const classes = useStyles();
  // const circles = [
  //   { center: { x: 1, y: 2, name: 'A' }, radius: 4, id: genUid() },
  //   { center: { x: 3, y: 4, name: 'B' }, radius: 7, id: genUid() },
  // ]
  const circles = useSelector(circlesSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>

      <>
        <Breadcrumbs active={1} />

        <div className="PageContent">
          <CirclesList circles={circles} />

          <PageDetailsContainer>
            <FiguresCanvas />

            <Outlet />

          </PageDetailsContainer>
        </div>

      </>
    </PatchStyles>
  );
};
