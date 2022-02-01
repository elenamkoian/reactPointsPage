import { useState } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Button } from '../../../componetnts/button/button';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useCreatePointMutation } from '../../../store/services/points.service';
import genUid from 'light-uid';

const useStyles = makeStyles((theme) => ({
    PointCreateForm: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    InputsDiv: {
      display: 'flex',
      gap: theme.spacing(2),
      height: theme.spacing(7),
    },
    ActionsDiv: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: theme.spacing(5),
    },
    CancelBtn: {
      color: 'white',
      textDecoration: 'none',

      '&:hover': {
        color: 'lightgrey',
      },
    },
  }
));

const DEFAULT_VALUES = {
  x: '',
  y: '',
  name: '',
};

export const PointCreateForm = () => {
  const classes = useStyles();
  const [createPoint, { isLoading, data }] = useCreatePointMutation();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);

  const handleCreate = (point) => {
    createPoint({ ...point, id: genUid() });
    // dispatch(pointsSlice.actions.createPoint(point));
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
