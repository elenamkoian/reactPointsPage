import { Navbar } from './navbar/navbar';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles(() => ({
    PageShell: {
      display: 'flex',
      flexDirection: 'column',
    },
  }
));

export const PageShell = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="PageShell">
        <Navbar />

        <Outlet />
      </div>
    </PatchStyles>
  );
};
