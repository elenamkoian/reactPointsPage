import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../componetnts/button/button';
import { MenuItem, TextField } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchPointsQuery } from '../../../store/services/points.service';
import { useCreateTriangleMutation } from '../../../store/services/triangles.service';
import genUid from 'light-uid';

const useStyles = makeStyles((theme) => ({
  TriangleCreateForm: {
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
  trianglePointsIds: [],
};

export const TriangleCreateForm = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);
  const [createTriangle] = useCreateTriangleMutation();
  const { data: points, isFetching } = useFetchPointsQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  const handleCreate = ({ trianglePointsIds }) => {
    const triangle = {
      points: trianglePointsIds.map((id) => points.find((point) => point.id === id)),
      name: trianglePointsIds.map((id) => points.find((point) => point.id === id).name),
    };
    createTriangle({ ...triangle, id: genUid() });
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
            disabled={isFetching}
            value={formValues.trianglePointsIds}
            onChange={handleSelect}
            helperText={formValues.trianglePointsIds.length !== 3 ? 'Select 3 points' : ''}
            error={formValues.trianglePointsIds.length !== 3}
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
            disabled={formValues.trianglePointsIds.length !== 3}
          >
            Save
          </Button>
        </div>
      </form>
    </PatchStyles>
  );
};
