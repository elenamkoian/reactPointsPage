import { Component } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Button } from '../../../componetnts/button/button';
import './point-create-form.scss';

const DEFAULT_VALUES = {
  x: '',
  y: '',
  name: '',
};

export class PointCreateForm extends Component {
  state = { ...DEFAULT_VALUES };

  render() {
    const { onVisibilityChange } = this.props;

    return (
      <form className="PointCreateForm">
        <div className="InputsDiv">
          <Input label="x axis" name="x" value={this.state.x} onChange={this.handleInputChange} />
          <Input label="y axis" name="y" value={this.state.y} onChange={this.handleInputChange} />
          <Input label="Name" name="name" value={this.state.name} onChange={this.handleInputChange} />
        </div>

        <div className="ActionsDiv">
          <Button onClick={onVisibilityChange}>CANCEL</Button>
          <Button
            size="large"
            variant="outlined"
            onClick={() => this.handleSaveBtn()}
            disabled={!this.state.x || !this.state.y || !this.state.name}
          >
            Save
          </ Button>
        </div>
      </form>
    );
  }

  handleInputChange = (ev) => {
    const axisName = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [axisName]: value,
    });
  };

  handleSaveBtn = () => {
    this.props.onSubmit(this.state);
    this.setState({ ...DEFAULT_VALUES });
  };

}
