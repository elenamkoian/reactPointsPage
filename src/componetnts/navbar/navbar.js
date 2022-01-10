import { Logo } from '../logo/logo';
import { Button } from '../button/button';
import './navbar.scss';
import clsx from 'clsx';

export const Navbar = ({ active, onActivePageChange }) => {
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
            <Button
              onClick={() => onActivePageChange(index)}
              key={index}
              className={`Button ${index === active ? 'Active' : ''}`}
              // className={({ isActive }) => clsx('Button', { 'Active': isActive })}
              size="small"
              variant="outlined"
            >
              {figure}
            </Button>
          ))
        }
      </div>
    </div>
  );
};
