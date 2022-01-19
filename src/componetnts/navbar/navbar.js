import { Logo } from '../logo/logo';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import * as classes from './navbar.module.scss'

export const Navbar = () => {
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
