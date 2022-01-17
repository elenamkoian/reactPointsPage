import { Logo } from '../logo/logo';
import { Button } from '../button/button';
import './navbar.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Navbar = ( ) => {
  const pages = ['Points', 'Circles', 'Rectangles', 'Triangles'];

  return (
    <div className="Navbar">
      <div className="LogoWithTitle">
        <Logo />
        <span className="PageTitle">Figures</span>
      </div>

      <div className="ButtonList">
        {
          pages.map((figure, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => clsx('Button', { 'Active': isActive })}
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
