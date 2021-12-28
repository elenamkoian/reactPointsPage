import './points-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const PointsListItem = ({ point, onDeletePoint }) => {

  return (
    <div className="PointsListItem">
      <span className="DeleteIcon" onClick={() => onDeletePoint()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

      <div className="Avatar">{point.name}</div>
      <span>Coordinate (x: {point.x}, y: {point.y})</span>

    </div>
  );

};
