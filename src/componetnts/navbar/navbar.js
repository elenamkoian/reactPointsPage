import { Logo } from '../logo/logo';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    Navbar: {
      backgroundColor: theme.palette.background.paper,
      height: theme.spacing(9),
      display: 'flex',
      justifyContent: 'space-between',
    },
    ButtonList: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(2),
    },
    Button: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      letterSpacing: 1,
      fontSize: 14,
      color: theme.palette.text.secondary,
      height: '98%',
      background: 'transparent',
      textDecoration: 'none',
      padding: ' 0 16px',
    },
    Active: {
      borderRadius: 0,
      cursor: 'pointer',
      color: theme.palette.green.light,
      borderBottom: '2px solid rgba(43, 166, 161, 1)',
    },
    LogoWithTitle: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(6),
    },
    PageTitle: {
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      letterSpacing: 2,
      marginLeft: theme.spacing(1),
      fontSize: theme.spacing(2),
      color: theme.palette.green.light,
    },
  }
));

export const Navbar = () => {
  const classes = useStyles();
  const pages = ['Points', 'Circles', 'Triangles', 'Rectangles'];

  return (
    <div className={classes.Navbar}>
      <div className={classes.LogoWithTitle}>
        <Logo />
        <span className={classes.PageTitle}>Figures</span>
      </div>

      <div className={classes.ButtonList}>
        {
          pages.map((figure, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => clsx(classes.Button, { [classes.Active]: isActive })}
              to={figure.toLocaleLowerCase()}
            >
              {figure}
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};
