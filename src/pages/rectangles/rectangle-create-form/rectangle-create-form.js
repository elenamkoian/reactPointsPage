import { useState } from 'react';
import { Button } from '../../../componetnts/button/button';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFetchPointsQuery } from '../../../store/services/points.service';
import { useCreateRectangleMutation } from '../../../store/services/rectangles.service';
import genUid from 'light-uid';

const useStyles = makeStyles((theme) => ({
  RectangleCreateForm: {
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
}));

const DEFAULT_VALUES = {
  rectangleVerticesId: [],
};

export const RectangleCreateForm = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);
  const [createRectangle] = useCreateRectangleMutation();
  const { data: points } = useFetchPointsQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  const handleCreate = ({ rectangleVerticesId }) => {
    const rectangle = {
      vertices: rectangleVerticesId.map((id) => points.find((point) => point.id === id)),
      name: rectangleVerticesId.map((id) => points.find((point) => point.id === id).name),
    };
    createRectangle({ ...rectangle, id: genUid() });
  };

  const handleSaveBtn = () => {
    handleCreate(formValues);
    setFormValues(DEFAULT_VALUES);
  };

  const handleSelect = (ev) => {
    setFormValues({ ...formValues, rectangleVerticesId: ev.target.value });
  };

  return (
    <PatchStyles classNames={classes}>
      <form className="RectangleCreateForm">
        <div className="InputsDiv">
          <TextField
            select
            label="vertices"
            SelectProps={{
              multiple: true,
            }}
            value={formValues.rectangleVerticesId}
            onChange={handleSelect}
            helperText={formValues.rectangleVerticesId.length !== 4 ? 'Select 4 points' : ''}
            error={formValues.rectangleVerticesId.length !== 4}
          >
            {!points && <MenuItem disabled>No Items</MenuItem>}
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


        </div>

        <div className="ActionsDiv">
          <Link to=".." className="CancelBtn">CANCEL</Link>
          <Button
            size="large"
            variant="outlined"
            onClick={() => handleSaveBtn()}
            disabled={formValues.rectangleVerticesId.length !== 4}
          >
            Save
          </Button>
        </div>
      </form>
    </PatchStyles>
  );
};
