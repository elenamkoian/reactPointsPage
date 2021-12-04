import { Button } from '../button/button';
import './breadcrumbs.scss';
import { Component } from 'react';

export class Breadcrumbs extends Component {
  render() {
    let { pages, active, onVisibilityChange, isFormVisible } = this.props;

    return (
      <div className="Breadcrumbs">
        {
          pages.map((figure, index) => (
            active === index ? <Button size="small"> {figure}</Button> : ''
          ))
        }

        <Button
          size="large"
          variant="contained"
          onClick={onVisibilityChange}
          disabled={isFormVisible}
        >
          CREATE
        </ Button>

      </div>
    );
  }
}
