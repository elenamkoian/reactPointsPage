import './App.scss';
import { Component } from 'react';
import { Page } from './componetnts/page';

export class App extends Component {
  render() {
    return (
      <div className='AppRoot'>
        <Page />
      </div>
    )
  }
}

export default App;
