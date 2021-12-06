import { Button } from '../button/button';
import './breadcrumbs.scss';

export function Breadcrumbs({ pages, active, onVisibilityChange, isFormVisible }) {
  return (
    <div className="Breadcrumbs">
      {
        pages.map((figure, index) => (
          active === index ? <Button size="small" key={index}> {figure}</Button> : ''
        ))
      }
      <Button
        size='large'
        variant='contained'
        onClick={onVisibilityChange}
        disabled={isFormVisible}
      >
        CREATE
      </ Button>

    </div>
  );
}
