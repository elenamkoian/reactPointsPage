import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { circlesSlice } from '../../../store/slices/circles.slice';
import './circles-list-item.scss'

export const CirclesListItem = ({ circle }) => {
  const dispatch = useDispatch();

  const handleDeleteCircle = () => {
    dispatch(circlesSlice.actions.deleteCircle(circle.id));
  };

  return (
    <div className="CirclesListItem">
      <span className="DeleteCircle"
            onClick={() => handleDeleteCircle()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

      <div className="Avatar">{circle.center.name}</div>
      <div className="CircleDetails">
        <span>Center (x: {circle.center.x}, y: {circle.center.y})</span>
        <span>Radius ({circle.radius})</span>
      </div>
    </div>
  )
}


// [
//   { center: [{ x: 1, y: 2, name: 'A' }], radius: 4 },
//   { center: [{ x: 3, y: 4, name: 'B' }], radius: 7 },
// ],
