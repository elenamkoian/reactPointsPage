import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import PatchStyles from 'patch-styles';
import { rectanglesSlice } from '../../../store/slices/rectangles.slice';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    RectanglesListItem: {
      color: theme.palette.text.primary,
      height: 'auto',
      borderRadius: 12,
      padding: theme.spacing(2),
      border: '1px solid #103153',
      background: theme.palette.blue.card,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      fontSize: 14,
      position: 'relative',
    },
    DeleteRectangle: {
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
    RectanglesListItemContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing(1),
    },
    RectanglesListItemTopContent: {
      display: 'flex',
      gap: theme.spacing(1),
      fontSize: theme.spacing(2),
    },
    RectanglesListItemBottomContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
    },
    Vertices: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      fontSize: 14,
    },
  }
));

export const RectanglesListItem = ({ rectangle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteRectangle = () => {
    dispatch(rectanglesSlice.actions.deleteRectangle(rectangle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="RectanglesListItem">
      <span className="DeleteRectangle"
            onClick={() => handleDeleteRectangle()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

        <div className="RectanglesListItemContent">
          <div className="RectanglesListItemTopContent">
            <span>{rectangle.name} rectangle</span>
          </div>
          <div className="RectanglesListItemBottomContent">

            {
              rectangle.vertices.map((vertex) => (
                <div className="Vertices" key={vertex.id}>
                  <span className="Avatar">{vertex.name}</span>
                  <span>vertex coordinate ( x: {vertex.x}, y: {vertex.y} )</span>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </PatchStyles>
  );
};

