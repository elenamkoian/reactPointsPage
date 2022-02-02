import PatchStyles from 'patch-styles';
import { RectanglesListItem } from '../rectangles-litst-item/rectangles-list-item';
import { makeStyles } from '@mui/styles';
import { useFetchRectanglesQuery } from '../../../store/services/rectangles.service';

const useStyles = makeStyles((theme) => ({
    RectanglesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      minWidth: '30%',
      color: theme.palette.text.secondary,
    },
  }
));

export const RectanglesList = () => {
  const classes = useStyles();
  const { data: rectangles } = useFetchRectanglesQuery(null, {
      selectFromResult: ({ data, ...otherInfo }) => ({
        data: data && Object.values(data),
        ...otherInfo,
      }),
    },
  );

  return (
    <PatchStyles classNames={classes}>
      <div className="RectanglesList">
        {
          rectangles?.length ? (
            rectangles.map((rectangle) => (
                <RectanglesListItem
                  key={rectangle.id}
                  rectangle={rectangle}
                />
              ),
            )
          ) : (
            <span>no <b>rectangles</b> yet</span>
          )
        }
      </div>
    </PatchStyles>
  );
};
