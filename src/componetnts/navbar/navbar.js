import { Logo } from '../logo/logo';
import { Button } from '../button/button';
import './navbar.scss';

export const Navbar = ({ pages, active, onActivePageChange }) => {
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
