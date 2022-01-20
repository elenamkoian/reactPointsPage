import { useState } from 'react';
import * as classes from './circle-create-form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { circlesSlice } from '../../../store/slices/circles.slice';
import { pointsSlice } from '../../../store/slices/points.slice';
import { Input } from '../../../componetnts/input/input';
import { Link } from 'react-router-dom';
import { Button } from '../../../componetnts/button/button';
import { MenuItem, TextField } from '@mui/material';
import PatchStyles from 'patch-styles';

const DEFAULT_VALUES = {
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

  const handleInputValueChange = (ev) => {
    const { name, value } = ev.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSaveBtn = () => {
    handleCreate(formValues);
    setFormValues(DEFAULT_VALUES);
  };

  const handleSelect = (ev) => {
    setFormValues({ ...formValues, centerId: ev.target.value });
  };

  return (
    <PatchStyles classNames={classes}>
      <form className="CircleCreateForm">
        <div className="InputsDiv">
          <TextField
            select
            label="center"
            value={formValues.centerId}
            onChange={handleSelect}
            error={!formValues.centerId.length}
            fullWidth
          >
            {
              points.map((point) => (
                <MenuItem
                  key={point.id}
                  value={point.id}
                >
                  {point.name} point (x: {point.x}, y: {point.y})
                </MenuItem>
              ))
            }
          </TextField>
          <Input label="Radius" name="radius" value={formValues.radius} onChange={handleInputValueChange} />
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
    </PatchStyles>
  );
};
