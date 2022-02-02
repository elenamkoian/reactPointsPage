import { useState } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Link } from 'react-router-dom';
import { Button } from '../../../componetnts/button/button';
import { MenuItem, TextField } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchPointsQuery } from '../../../store/services/points.service';
import { useCreateCircleMutation } from '../../../store/services/circles.service';
import genUid from 'light-uid';

const useStyles = makeStyles((theme) => ({
    CircleCreateForm: {
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
      color: theme.palette.text.primary,
      textDecoration: 'none',

      '&:hover': {
        color: 'lightgrey',
      },
    },
  }
));

const DEFAULT_VALUES = {
  centerId: '',
  radius: '',
};

export const CircleCreateForm = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);
  const [createCircle] = useCreateCircleMutation();
  const { data: points } = useFetchPointsQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo
    })
  });

  const handleCreate = (circle) => {
    const point = points.find((point) => point.id === circle.centerId);
    circle.center = point;
    createCircle({ ...circle, id: genUid() });
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
              points?.map((point) => (
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
            disabled={!formValues.centerId || !formValues.radius}
          >
            Save
          </Button>
        </div>
      </form>
    </PatchStyles>
  );
};
