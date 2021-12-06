import { Component } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Button } from '../../../componetnts/button/button';
import './point-create-form.scss';

export class PointCreateForm extends Component {
  state = {
    xAxis: '',
    yAxis: '',
    name: ''
  };

  render() {
    const { onSubmit } = this.props;
    const { onVisibilityChange} =this.props;

    return (
      <form className="PointCreateForm">
        <div className="InputsDiv">
          <Input label='x axis' name='xAxis' value={this.state.xAxis} onChange={this.handleInputChange} />
          <Input label='y axis' name='yAxis' value={this.state.yAxis} onChange={this.handleInputChange} />
          <Input label='Name' name='name' value={this.state.name} onChange={this.handleInputChange}/>
        </div>

        <div className="ActionsDiv">
          <Button onClick={onVisibilityChange}>CANCEL</Button>
          <Button
            size='large'
            variant="outlined"
            onClick={() =>this.handleSaveBtn(onSubmit)}
            disabled={!this.state.xAxis || !this.state.yAxis || !this.state.name}
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

  handleSaveBtn = (onSubmit) => {
    onSubmit({
      x: this.state.xAxis,
      y: this.state.yAxis,
      name: this.state.name,
    })
    this.setState({
      xAxis: '',
      yAxis: '',
      name: '',
    })
  }

}
