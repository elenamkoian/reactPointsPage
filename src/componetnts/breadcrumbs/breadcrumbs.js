import { Button } from '../button/button';
import * as classes from './breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';

export const Breadcrumbs = ({ active }) => {
  const pages = ['Points', 'Circles', 'Triangles', 'Rectangles'];

  return (
    <PatchStyles classNames={classes}>
      <div className="Breadcrumbs">
        {
          pages.map((figure, index) => (
            active === index ? <Button size="small" key={index}> {figure}</Button> : ''
          ))
        }

        <Link
          to="create"
          size="large"
          variant="contained"
          className="CreateBtn"
        >
          CREATE
        </Link>

      </div>
    </PatchStyles>
  );
};
