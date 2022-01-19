import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { circlesSlice } from '../../../store/slices/circles.slice';
import * as classes from './circles-list-item.module.scss'
import PatchStyles from 'patch-styles';

export const CirclesListItem = ({ circle }) => {
  const dispatch = useDispatch();

  const handleDeleteCircle = () => {
    dispatch(circlesSlice.actions.deleteCircle(circle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CirclesListItem">
      <span className="DeleteCircle"
            onClick={() => handleDeleteCircle()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

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
  )
}

// [
//   {
//      centerId: { x: 1, y: 2, name: 'A', id: '' },
//      radius: 4
//   },
// ],
