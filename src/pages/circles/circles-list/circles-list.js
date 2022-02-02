import { CirclesListItem } from '../circles-list-item/circles-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchCirclesQuery } from '../../../store/services/circles.service';

const useStyles = makeStyles((theme) => ({
    CirclesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      minWidth: '30%',
      color: theme.palette.text.secondary,
    },
  }
));

export const CirclesList = () => {
  const classes = useStyles();

  const { data: circles } = useFetchCirclesQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo
    })
  });

  return (
    <PatchStyles classNames={classes}>
      <div className="CirclesList">
        {
          circles?.length ? (
            circles?.map((circle) => (
                <CirclesListItem
                  circle={circle}
                  key={circle.id}
                />
              ),
            )
          ) : (
            <span>no <b>circles</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};


