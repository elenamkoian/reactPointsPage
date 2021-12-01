import { Component } from 'react';
import { Navbar } from './navbar';
import { BreadcrumbsBar } from './breadcrumbs-bar';
import { CoordinateList } from './coordinate-list';
import { Canvas } from './canvas';

export class Page extends Component {
  state = {
    pages: ['Points', 'Circles', 'Rectangles', 'Triangles'],
    activePage: 0,
    points: [
      { x: 7, y: 6, name: 'A' },
      { x: 3, y: 4, name: 'B' },
      { x: 5, y: 6, name: 'C' },
      { x: 7, y: 8, name: 'D' },
      { x: 1, y: 8, name: 'E' },
      { x: 6, y: 4, name: 'F' },
      { x: 2, y: 3, name: 'G' },
    ],

  };

  render() {
    return (
      <div className="Page">
        <Navbar
          pages={this.state.pages}
          active={this.state.activePage}
        />

        <BreadcrumbsBar
          pages={this.state.pages}
          active={this.state.activePage}
        />

        <div  className='Content'>
          <CoordinateList
            points={this.state.points}
          />

          <Canvas />
        </div>

      </div>
    );
  }
}
