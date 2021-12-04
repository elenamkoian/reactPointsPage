import { Component } from 'react';
import { Navbar } from './navbar/navbar';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { PointList } from '../pages/points/point-list/point-list';
import { FiguresCanvas } from './figures-canvas/figures-canvas.js';
import { PageDetailsContainer } from './page-details-container/page-details-container';
import { PointCreateForm } from '../pages/points/point-create-form/point-create-form';

export class Page extends Component {
  state = {
    pages: ['Points', 'Circles', 'Rectangles', 'Triangles'],
    activePage: 0,
    points: JSON.parse(localStorage.getItem('points')) ?? [],
    isFormVisible: false,
  };

  render() {
    return (
      <div className="Page">
        <Navbar
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
          <PointList points={this.state.points} />

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
      </div>
    );
  }

  handleSubmit(point) {
    const points = [...this.state.points, point];
    this.setState({ points });
    localStorage.setItem('points', JSON.stringify(points));
  }

  handleIsFormVisible() {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    })
  }
}
