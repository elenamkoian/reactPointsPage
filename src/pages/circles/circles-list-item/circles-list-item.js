import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useDeleteCircleMutation } from '../../../store/services/circles.service';
import { WithLoader } from '../../../componetnts/with-loader';

const useStyles = makeStyles((theme) => ({
    CirclesListItem: {
      color: theme.palette.text.primary,
      height: 'auto',
      borderRadius: theme.spacing(1.5),
      padding: theme.spacing(2),
      border: '1px solid #103153',
      background: theme.palette.blue.card,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      fontSize: theme.spacing(1.75),
      position: 'relative',
    },
    DeleteCircle: {
      top: 2,
      right: 1,
      padding: '4px 6px',
      cursor: 'pointer',
      borderRadius: 4,
      fontSize: theme.spacing(1),
      position: 'absolute',
    },
    Avatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: '1px solid #39C095',
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
    CirclesListItemContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing(1),
    },
    CirclesListItemTopContent: {
      display: 'flex',
      gap: theme.spacing(1),
      alignItems: 'center',
    },
    CirclesListItemBottomContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
      paddingLeft: theme.spacing(5),
    },
  }
));

export const CirclesListItem = ({ circle }) => {
  const classes = useStyles();
  const [deleteCircle, { isLoading }] = useDeleteCircleMutation();

  const handleDeleteCircle = () => {
    deleteCircle(circle.id);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CirclesListItem">
        <WithLoader isLoading={isLoading} className="DeleteCircle">
          <span className="DeleteCircle"
                onClick={() => handleDeleteCircle()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </WithLoader>

        <div className="CirclesListItemContent">
          <div className="CirclesListItemTopContent">
            <div className="Avatar">{circle.center.name}</div>
            <span>Centered circle</span>
          </div>
          <div className="CirclesListItemBottomContent">
            <span>Center coordinate ( x: {circle.center.x}, y: {circle.center.y} )</span>
            <span>Radius ( {circle.radius} )</span>
          </div>
        </div>
      </div>
    </PatchStyles>
  );
};
