import { useState } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Button } from '../../../componetnts/button/button';
import * as classes from './point-create-form.module.scss';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../store/slices/points.slice';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';

const DEFAULT_VALUES = {
  x: '',
  y: '',
  name: '',
};

export const PointCreateForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);

  const handleCreate = (point) => {
    dispatch(pointsSlice.actions.createPoint(point));
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSaveBtn = () => {
    handleCreate(formValues);
    setFormValues(DEFAULT_VALUES);
  };

  return (
    <PatchStyles classNames={classes}>
      <form className="PointCreateForm">
        <div className="InputsDiv">
          <Input label="x axis" name="x" value={formValues.x} onChange={handleInputChange} />
          <Input label="y axis" name="y" value={formValues.y} onChange={handleInputChange} />
          <Input label="Name" name="name" value={formValues.name} onChange={handleInputChange} />
        </div>

        <div className="ActionsDiv">
          <Link to=".." className="CancelBtn" >CANCEL</Link>
          <Button
            size="large"
            variant="outlined"
            onClick={() => handleSaveBtn()}
            disabled={!formValues.x || !formValues.y || !formValues.name}
          >
            Save
          </ Button>
        </div>
      </form>
    </PatchStyles>
  );
};
