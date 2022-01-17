import { useState } from 'react';
import './circle-create-form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { circlesSlice } from '../../../store/slices/circles.slice';
import { pointsSlice } from '../../../store/slices/points.slice';
import { Input } from '../../../componetnts/input/input';
import { Link } from 'react-router-dom';
import { Button } from '../../../componetnts/button/button';
import { MenuItem, TextField } from '@mui/material';

const DEFAULT_VALUES = {
  center: null,
  centerId: '',
  radius: '',
};

export const CircleCreateForm = () => {
  const dispatch = useDispatch();
  const points = useSelector(pointsSlice.selectors.selectAll);
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);

  const handleCreate = (circle) => {
    const point = points.find((point) => point.id === circle.centerId);
    circle.center = point;
    dispatch(circlesSlice.actions.createCircle(circle));
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSaveBtn = () => {
    handleCreate(formValues);
    setFormValues(DEFAULT_VALUES);
  };

  const handleSelect = (ev) => {
    setFormValues({...formValues, centerId: ev.target.value})
  };

  return (
    <form className="CircleCreateForm">
      <div className="InputsDiv">
        <TextField
          select
          label="center"
          value={formValues.centerId}
          onChange={handleSelect}
          // helperText="Please select center from points"
        >
          {
            points.map((point) => (
              <MenuItem
                key={point.id}
                value={point.id}
              >
                coordinate (x: {point.x}, y: {point.y}
              </MenuItem>
            ))
          }
        </TextField>
        <Input label="Radius" name="radius" value={formValues.radius} onChange={handleInputChange} />
      </div>

      <div className="ActionsDiv">
        <Link to=".." className="CancelBtn">CANCEL</Link>
        <Button
          size="large"
          variant="outlined"
          onClick={() => handleSaveBtn()}
          // disabled={!formValues.center.x || !formValues.center.y || !formValues.center.name || !formValues.radius}
        >
          Save
        </Button>
      </div>
    </form>
  );
};
