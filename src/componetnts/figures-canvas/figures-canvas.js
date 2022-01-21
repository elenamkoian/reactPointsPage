import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    FiguresCanvas: {
      height: theme.spacing(57),
      border: '1px solid rgba(16, 49, 83, 1)',
      borderRadius: theme.spacing(1),
    },
  }
));

export const FiguresCanvas = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="FiguresCanvas">
        {/*<canvas />*/}
      </div>
    </PatchStyles>
  );
};
