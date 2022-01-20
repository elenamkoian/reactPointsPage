import * as classes from './rectangles-list-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import PatchStyles from 'patch-styles';
import { rectanglesSlice } from '../../../store/slices/rectangles.slice';

export const RectanglesListItem = ({ rectangle }) => {
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
  )
};

