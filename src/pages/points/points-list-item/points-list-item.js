import './points-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../store/slices/points.slice';

export const PointsListItem = ({ point }) => {
  const dispatch = useDispatch();

  const handleDeletePoint = () => {
    dispatch(pointsSlice.actions.deletePoint(point.id));
  };

  return (
    <div className="PointsListItem">
      <span className="DeleteIcon" onClick={() => handleDeletePoint()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

      <div className="Avatar">{point.name}</div>
      <span>Coordinate (x: {point.x}, y: {point.y})</span>
    </div>
  );

};
