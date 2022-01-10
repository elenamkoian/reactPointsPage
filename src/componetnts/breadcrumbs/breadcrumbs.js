import { Button } from '../button/button';
import './breadcrumbs.scss';
import { Link } from 'react-router-dom';

export const Breadcrumbs = ({ active, onVisibilityChange, isFormVisible }) => {
  const pages = ['Points', 'Circles', 'Rectangles', 'Triangles'];

  return (
    <div className="Breadcrumbs">
      {
        pages.map((figure, index) => (
          active === index ? <Button size="small" key={index}> {figure}</Button> : ''
        ))
      }

      <Link
        to="create"
        size='large'
        variant='contained'
        onClick={onVisibilityChange}
        disabled={isFormVisible}
      >
        CREATE
      </Link>

    </div>
  );
}
