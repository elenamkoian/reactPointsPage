import { PointsListItem } from '../points-list-item/points-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchPointsQuery } from '../../../store/services/points.service';

const useStyles = makeStyles((theme) => ({
    PointsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      minWidth: '30%',
      color: theme.palette.text.secondary,
    },
  }
));

export const PointsList = () => {
  const classes = useStyles();
  const { data: points } = useFetchPointsQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo
    })
  });

  return (
    <PatchStyles classNames={classes}>
      <div className="PointsList">
        {
          points?.length ? (
            points?.map((point) => (
                <PointsListItem
                  key={point.id}
                  point={point}
                />
              ),
            )
          ) : (
            <span>no <b>points</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};
