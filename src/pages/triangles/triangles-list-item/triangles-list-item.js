import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { trianglesSlice } from '../../../store/slices/triangles.slice';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    TrianglesListItem: {
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
    DeleteTriangle: {
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
    TrianglesListItemContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing(1),
    },
    TrianglesListItemTopContent: {
      display: 'flex',
      gap: theme.spacing(1),
      fontSize: theme.spacing(2),
    },
    TrianglesListItemBottomContent: {
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

export const TrianglesListItem = ({ triangle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteTriangle = () => {
    dispatch(trianglesSlice.actions.deleteTriangle(triangle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="TrianglesListItem">
      <span className="DeleteTriangle" onClick={() => handleDeleteTriangle()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

        <div className="TrianglesListItemContent">
          <div className="TrianglesListItemTopContent">
            <span>{triangle.name} triangle</span>
          </div>
          <div className="TrianglesListItemBottomContent">

            {
              triangle.points.map((vertex) => (
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
