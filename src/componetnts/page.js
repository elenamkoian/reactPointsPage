import { Component } from 'react';
import { Navbar } from './navbar/navbar';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { PointsList } from '../pages/points/points-list/points-list';
import { FiguresCanvas } from './figures-canvas/figures-canvas.js';
import { PageDetailsContainer } from './page-details-container/page-details-container';
import { PointCreateForm } from '../pages/points/point-create-form/point-create-form';

export class Page extends Component {
  state = {
    pages: ['Points', 'Circles', 'Rectangles', 'Triangles'],
    activePage: 0,
    points: JSON.parse(localStorage.getItem('points')) ?? [],
    circles: [
      { center: [{ x: 1, y: 2, name: 'A' }], radius: 4 },
      { center: [{ x: 3, y: 4, name: 'B' }], radius: 7 },
    ],
    isFormVisible: false,
  };

  render() {
    return (
      <div className="Page">
        <Navbar
          onActivePageChange={(index) => this.handlePageChange(index)}
          pages={this.state.pages}
          active={this.state.activePage}
        />

        <Breadcrumbs
          isFormVisible={this.state.isFormVisible}
          onVisibilityChange={() => this.handleIsFormVisible()}
          pages={this.state.pages}
          active={this.state.activePage}
        />

        <div className="PageContent">
          <PointsList points={this.state.points} onDeletePoint={(index) => this.handleXIcon(index)} />

          <PageDetailsContainer>
            <FiguresCanvas />
            {
              this.state.isFormVisible && (
                <PointCreateForm
                  onSubmit={(point) => this.handleSubmit(point)}
                  isFormVisible={this.state.isFormVisible}
                  onVisibilityChange={() => this.handleIsFormVisible()}
                />
              )
            }
          </PageDetailsContainer>
        </div>

        {/*<>*/}
        {/*  /!*<CirclesList circles={this.state.circles}/>*!/*/}
        {/*</>*/}

      </div>
    );
  }

  handleXIcon(index) {
    const points = this.state.points;
    points.splice(index, 1);
    localStorage.setItem('points', JSON.stringify(points));
    this.setState({ points });
  }

  handleSubmit(point) {
    const points = [...this.state.points, point];
    this.setState({ points });
    localStorage.setItem('points', JSON.stringify(points));
  }

  handleIsFormVisible() {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  }

  handlePageChange(index) {
    this.setState({
      activePage: index,
    });
  }
}
