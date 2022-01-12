import { useState } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Button } from '../../../componetnts/button/button';
import './circle-create-form.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { circlesSlice } from '../../../store/slices/circles.slice';

const DEFAULT_VALUES = {
  center: {
    x: '',
    y: '',
    name: '',
  },
  radius: '',
};

export const CircleCreateForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);

  const handleCreate = (circle) => {
    dispatch(circlesSlice.actions.createCircle(circle));
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCenterCoordinateChange = (ev) => {
    const { value, name } = ev.target;
    const { center } = formValues;
    center[name] = value;
    setFormValues({ ...formValues, center });
  };

  const handleSaveBtn = () => {
    handleCreate(formValues);
    setFormValues(DEFAULT_VALUES);
  };

  return (
    <form className="CircleCreateForm">
      <div className="InputsDiv">
        <Input label="x axis" name="x" value={formValues.center.x} onChange={handleCenterCoordinateChange} />
        <Input label="y axis" name="y" value={formValues.center.y} onChange={handleCenterCoordinateChange} />
        <Input label="Name" name="name" value={formValues.center.name} onChange={handleCenterCoordinateChange} />
        <Input label="Radius" name="radius" value={formValues.radius} onChange={handleInputChange} />
      </div>

      <div className="ActionsDiv">
        <Link to=".." className="CancelBtn">CANCEL</Link>
        <Button
          size="large"
          variant="outlined"
          onClick={() => handleSaveBtn()}
          disabled={!formValues.center.x || !formValues.center.y || !formValues.center.name || !formValues.radius}
        >
          Save
        </ Button>
      </div>
    </form>
  );
};
