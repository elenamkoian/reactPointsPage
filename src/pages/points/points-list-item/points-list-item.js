import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useDeletePointMutation } from '../../../store/services/points.service';
import { WithLoader } from '../../../componetnts/with-loader';

const useStyles = makeStyles((theme) => ({
    PointsListItem: {
      color: theme.palette.text.primary,
      height: 'auto',
      borderRadius: 12,
      padding: 12,
      border: '1px solid #103153',
      background: theme.palette.blue.card,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      fontSize: 14,
      position: 'relative',
    },
    DeletePoint: {
      position: 'absolute',
      top: 2,
      right: 1,
      padding: '4px 6px',
      cursor: 'pointer',
      borderRadius: 4,
      fontSize: theme.spacing(1),
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
  }
));

export const PointsListItem = ({ point }) => {
  const classes = useStyles();
  const [deletePoint, { isLoading }] = useDeletePointMutation();

  const handleDeletePoint = () => {
    deletePoint(point.id);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="PointsListItem">

        <WithLoader isLoading={isLoading} className="DeletePoint">
           <span className="DeletePoint"
                 onClick={() => handleDeletePoint()}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </WithLoader>

        <div className="Avatar">{point.name}</div>
        <span>Coordinate (x: {point.x}, y: {point.y})</span>
      </div>
    </PatchStyles>
  );
};
