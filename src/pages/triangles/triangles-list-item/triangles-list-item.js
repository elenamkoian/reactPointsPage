import * as classes from './triangles-list-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { trianglesSlice } from '../../../store/slices/triangles.slice';
import PatchStyles from 'patch-styles';

export const TrianglesListItem = ({ triangle }) => {
  const dispatch = useDispatch();

  const handleDeleteTriangle = () => {
    dispatch(trianglesSlice.actions.deleteTriangle(triangle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="TrianglesListItem">
      <span className="DeleteTriangle"
            onClick={() => handleDeleteTriangle()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

        <div className="TrianglesListItemContent">
          <div className="TrianglesListItemTopContent">
            <span>{triangle.name} triangle</span>
          </div>
          <div className="TrianglesListItemBottomContent">

            {
              triangle.points.map((vertex) => (
                <div className="Vertices">
                  <span className="Avatar">{vertex.name}</span>
                  <span>vertex coordinate ( x: {vertex.x}, y: {vertex.y} )</span>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </PatchStyles>
  )
};

// const triangles = [
//   {
//     points: [
//       { x: 1, y: 2, name: 'A', id: '' },
//       { x: 1, y: 2, name: 'B', id: '' },
//       { x: 1, y: 2, name: 'C', id: '' },
//     ],
//     id: genUid(),
//   },
// ];
