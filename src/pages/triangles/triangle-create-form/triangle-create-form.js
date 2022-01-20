import { useState } from 'react';
import * as classes from './triangle-create-form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pointsSlice } from '../../../store/slices/points.slice';
import { Link } from 'react-router-dom';
import { Button } from '../../../componetnts/button/button';
import { MenuItem, TextField } from '@mui/material';
import { trianglesSlice } from '../../../store/slices/triangles.slice';
import PatchStyles from 'patch-styles';

const DEFAULT_VALUES = {
  trianglePointsIds: [],
};

export const TriangleCreateForm = () => {
  const dispatch = useDispatch();
  const points = useSelector(pointsSlice.selectors.selectAll);
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);

  const handleCreate = ({ trianglePointsIds }) => {
    const triangle = {
      points: trianglePointsIds.map((id) => points.find((point) => point.id === id)),
      name: trianglePointsIds.map((id) => points.find((point) => point.id === id).name),
    };
    console.log(triangle);
    dispatch(trianglesSlice.actions.createTriangle(triangle));
  };

  const handleSaveBtn = () => {
    handleCreate(formValues);
    setFormValues(DEFAULT_VALUES);
  };

  const handleSelect = (ev) => {
    setFormValues({ ...formValues, trianglePointsIds: ev.target.value });
  };

  return (
    <PatchStyles classNames={classes}>
      <form className="TriangleCreateForm">
        <div className="InputsDiv">
          <TextField
            select
            label="vertices"
            SelectProps={{
              multiple: true,
            }}
            value={formValues.trianglePointsIds}
            onChange={handleSelect}
            helperText={formValues.trianglePointsIds.length !== 3 ? 'Select 3 points' : ''}
            error={formValues.trianglePointsIds.length !== 3}
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
        </div>

        <div className="ActionsDiv">
          <Link to=".." className="CancelBtn">CANCEL</Link>
          <Button
            size="large"
            variant="outlined"
            onClick={() => handleSaveBtn()}
            disabled={formValues.trianglePointsIds.length !== 3}
          >
            Save
          </Button>
        </div>
      </form>
    </PatchStyles>
  );
};
